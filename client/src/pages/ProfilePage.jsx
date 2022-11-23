import React, {useState} from 'react';
import styled from 'styled-components';
import {Modal, MantineProvider, Tabs, ActionIcon } from '@mantine/core';
import moment from 'moment';
import EditUser from '../components/EditUser.jsx';
import NotificationList from '../components/Notifications/NotificationList.jsx';

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40%;

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
`;

const Notifications = styled.div`
`;

const SidebarTitles = styled.h4`
`

const ProfilePage = () => {

  const [notifications, setNotifications] = useState([{title: 'EventName', date: Date.now()}]);
  const [upcomingEvents, setUpcomingEvents] = useState([{title: 'EventName', date: Date.now()}]);
  const [pastEvents, setPastEvents] = useState([{title: 'EventName', date: Date.now()}]);

  const [user, setUser] = useState(exampleUser);
  const isOwner = true;
  const [profileImage, setProfileImage] = useState(user.photo);

  const [opened, setOpened] = useState(false);

  const EditIcon = (<ActionIcon size="lg" onClick={() => {setOpened(true)}}><img style={{width: '20px'}}src='https://cdn-icons-png.flaticon.com/512/1828/1828911.png'/></ActionIcon>);

  return (
  <Outer>
    <Profile>
      <MantineProvider theme={{colorScheme: 'dark'}}>
      <About>
        <EditUser user={user} setUser={setUser} opened={opened} setOpened={setOpened} />
        <ProfileImage src={profileImage}/>
        {isOwner ? EditIcon : null}
        <AboutMe>
          <h4>{user.username}</h4>
          <PAbout>{user.bio}</PAbout>
          <PAbout>Location: {user.location}</PAbout>
          <PAbout>Age: {user.age}</PAbout>
          <PAbout>motto: {user.motto}</PAbout>
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
            {upcomingEvents.map((event, index) => (
              <p key={index} >{event.title} is {getDate(event.date)} </p>
              ))
            }
          </Tabs.Panel>

          <Tabs.Panel value="Past" pt="xs">
            {pastEvents.map((event, index) => (
              <p key={index} >{event.title} is {getDate(event.date)} </p>
              ))
            }
          </Tabs.Panel>
          </Tabs>
        </Events>
        <Notifications>
          <NotificationList />
        </Notifications>
      </Sidebar>
    </MantineProvider>
    </Profile>
  </Outer>
  )
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
  username: 'RVR4EVR',
  photo: 'https://lexica-serve-encoded-images.sharif.workers.dev/sm/13d675a7-b651-40c4-ba45-7fc268db5ba4',
  spotify_username: 'thatsit2001',
  playlist_id:'none'
};
export default ProfilePage;