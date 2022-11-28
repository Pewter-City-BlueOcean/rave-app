import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Modal, MantineProvider, Tabs, ActionIcon } from '@mantine/core';
import moment from 'moment';
import EditUser from '../components/EditUser.jsx';
import NotificationList from '../components/Notifications/NotificationList.jsx';
import { useRaveStore } from '../helpers/raveStore.js';
import { getUserData } from '../helpers/getUserData.js';
import { getDaysFromToday } from '../helpers/time_helpers.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Playlist from '../components/Playlist.jsx';
import { H2, H3 } from '../Styles.jsx';

const SERVER_ADDR = process.env.SERVER_ADDR + ':' + process.env.PORT;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PlaylistContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  margin: 5px;
  border-radius: 5px;
  color: white;
  padding: 0.35vh;
`;

const About = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vh;
  background: rgba(0, 0, 0, 0.5);
  margin: 5px;
  border-radius: 5px;
  color: white;
  padding: 2vh;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 40%;
  height: 0;
  padding-bottom: 40%;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;

const AboutMe = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
`;
const PAbout = styled.p`
  margin: 1px;
`;


const Sidebar = styled.div`
  width: 30vh;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  margin: 5px;
  border-radius: 5px;
  color: white;
`;

const Events = styled.div`
  font-family: Karla;
`;

const Notifications = styled.div`
  font-family: Karla;
`;

const SidebarTitles = styled.h4`
  font-family: Karla;
`

const ProfilePage = ({access_token, setAccess_token, refresh_token}) => {

  const [notifications, setNotifications] = useState([{title: 'EventName', date: Date.now()}]);
  const setCurrentGroup = useRaveStore((state) => state.setCurrentGroup);
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [groups, setGroups] = useState([]);
  let navigate = useNavigate();
  const userId = useRaveStore((state) => state.userId);

  const getGroups = () => {
    const config = {
      params: {
        user_id: userId
      }
    };

    const divideGroups = (g) => {
      g.forEach((group) => {
        var isPast = (getDaysFromToday(group.datetime_local) < 0);
        isPast ? setPast( past => [...past, group]) : setUpcoming(upcoming => [...upcoming, group])
      }
      )
    }

    axios.get(`${process.env.SERVER_ADDR}:${process.env.PORT}/db/groups/?user_id=${userId}`)
      .then((res) => {
        console.log('Got the groups', res.data);
        divideGroups(res.data);
      })
      .catch(e => console.error(e));
  }

  useEffect(() => {
    if (userId) {
      getUserData(userId).then(results => {
        console.log(results.data[0]);
        setUser(results.data[0]);
        setProfileImage(`${SERVER_ADDR}/${results.data[0].photo}`);
      })
      getGroups();
    }
  }, [userId])

  const [user, setUser] = useState({});
  const isOwner = true;
  const [profileImage, setProfileImage] = useState('');

  const [opened, setOpened] = useState(false);
  const handleEventClick = (event) => {
    setCurrentGroup(event);
    let path = '/group?' +
      new URLSearchParams({
        id: event.group_id,
        access_token: access_token,
        refresh_token: refresh_token
      });
    navigate(path);
  };

  const EditIcon = (<ActionIcon size="lg" onClick={() => {setOpened(true)}}><img style={{width: '20px'}}src='https://cdn-icons-png.flaticon.com/512/1828/1828911.png'/></ActionIcon>);

  if (!userId) {
    return (
      <div><h1>Loading</h1></div>
    )
  } else {
  return (
  <Outer>
    <H2>PROFILE</H2>
    <Profile>
      <MantineProvider theme={{colorScheme: 'dark'}}>
      <ColumnContainer>
        <PlaylistContainer>
          <Playlist
            id={user.playlist}
            access_token={access_token}
            setAccess_token={setAccess_token}
            refresh_token={refresh_token}
            isOwner={isOwner}
            user={user}
            setUser={setUser}
          />
        </PlaylistContainer>
      <RowContainer>
        <About>
          <EditUser user={user} setUser={setUser} opened={opened} setOpened={setOpened} />
          <ImageContainer>
          <ProfileImage src={profileImage}/>
          </ImageContainer>
          {isOwner ? EditIcon : null}
          <AboutMe>
            <h4>{user.username || user.individual_id}</h4>
            <PAbout>{user.bio || ''}</PAbout>
            <PAbout>Location: {user.location || ''}</PAbout>
            <PAbout>Age: {user.age || ''}</PAbout>
            <PAbout>motto: {user.motto || ''}</PAbout>
          </AboutMe>
        </About>
      <Sidebar>
        <Events>
          <SidebarTitles>Events</SidebarTitles>
          <Tabs color="dark" radius="md" defaultValue="Upcoming">
          <Tabs.List>
            <Tabs.Tab value="Upcoming" >Upcoming</Tabs.Tab>
            <Tabs.Tab value="Past" >Past</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="Upcoming" pt="xs">
            {upcoming.map((event, index) => (
              <p onClick={() => {handleEventClick(event)}} key={index} >{event.event_title}</p>
              ))
            }
          </Tabs.Panel>
          <Tabs.Panel value="Past" pt="xs">
            {past.map((event, index) => (
              <p onClick={() => {handleEventClick(event)}} key={index} >{event.event_title}</p>
              ))
            }
          </Tabs.Panel>
          </Tabs>
        </Events>
        <Notifications>
          <NotificationList groups={groups} />
        </Notifications>
      </Sidebar>
    </RowContainer>
    </ColumnContainer>
  </MantineProvider>
  </Profile>
</Outer>
  )
  }
}

const getDate = (date) => {
  let currentDate = new Date()
  date = new Date(date);
  currentDate = currentDate.setHours(0, 0, 0, 0);
  date = date.setHours(0, 0, 0, 0);
  return currentDate - date === 0 ? 'Today' : moment(date).toNow();
}

const exampleUser = {
  id: 123,
  email: "hello@okay.com",
  bio: "I'm a raving raver",
  location: 'Dallas',
  age:"a bad age",
  motto: 'rave Rave RAAAAAVE',
  individual_id: 'RVR4EVR',
  photo: 'https://lexica-serve-encoded-images.sharif.workers.dev/sm/13d675a7-b651-40c4-ba45-7fc268db5ba4',
  playlist_id:'none'
};
export default ProfilePage;