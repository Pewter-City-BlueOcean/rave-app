import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import EventCard from "../components/Feed/EventCard.jsx";
import NotificationList from "../components/Notifications/NotificationList.jsx";
import {getDaysFromToday} from '../helpers/time_helpers.js'
import styled from 'styled-components';
import { useRaveStore } from '../helpers/raveStore.js';
import { H2, H3 } from '../Styles.jsx';

const Body = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  height: 75vh;
  margin-bottom: 25px;
  justify-content: space-around;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  height:fit-content;
  max-height: 100vh ;
  overflow: auto;
`

const GroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom; 100px;
  width: 70vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`
const NotifSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 10px;
`
const SH3 = styled(H3)`
  align-self: flex-start;
  margin-left: 18px;
`

const FeedPage = ({ access_token, refresh_token, setAccess_token }) => {
  const [groups, setGroups] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
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

    axios.get(`${process.env.SERVER_ADDR}:${process.env.PORT}/db/groups`, config)
      .then((res) => {
        divideGroups(res.data);
        setGroups(res.data);
      })
      .catch(e => console.error(e));
  }

  useEffect(() => {
    if (userId) {
      getGroups();
    }
  }, [userId]);

  return (
  <div>
    <H2>HOME</H2>
      <Body>
        <GroupsContainer>
          <SH3>Upcoming Events ({upcoming.length})</SH3>
          <CardContainer>
            {upcoming.map((event, i) => (
              <EventCard key={i} event={event} access_token={access_token} setAccess_token={setAccess_token} refresh_token={refresh_token} />
            ))}
          </CardContainer>

          <SH3>Past Events ({past.length})</SH3>
          <CardContainer>
          {past.map((event, i) => (
            <EventCard key={i} event={event} access_token={access_token} setAccess_token={setAccess_token} refresh_token={refresh_token} />
          ))}
          </CardContainer>
        </GroupsContainer>
        <NotifSection>
          <NotificationList groups={ groups }/>
        </NotifSection>
      </Body>
    </div>
  )
}

export default FeedPage;