import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import EventCard from "../components/Feed/EventCard.jsx";
import NotificationList from "../components/Notifications/NotificationList.jsx";
import groupsData from '../components/data/group_data.js'
import {getDaysFromToday} from '../helpers/time_helpers.js'
import styled from 'styled-components';
import { useRaveStore } from '../helpers/raveStore.js';


const Body = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 1000px;
  height: 400px;
  overflow: auto;
`
const GroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 800px;
  background: rgba(0, 0, 0, 0.46);
  // opacity: 0.8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`
const NotifSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  // background: rgba(0, 0, 0, 0.46);
  // opacity: 0.8;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  // border-radius: 5px;
`
const H3 = styled.h3`
  font-size: 20px;
  color: #eeeee4;
`

const FeedPage = ({ access_token, refresh_token, setAccess_token }) => {
  const [groups, setGroups] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const userId = useRaveStore((state) => state.userId);

  // console.log(userId);

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
        console.log('Got the groups', res.data);
        divideGroups(res.data);
        setGroups(res.data);
      })
      .catch(e => console.error(e));
  }

  useEffect(() => {
    if (userId) {
      getGroups();
    }
    console.log(userId)
  }, [userId]);

  return (
    <Body>
      <GroupsContainer>
        <H3>Upcoming Events ({upcoming.length})</H3>
        <CardContainer>
          {upcoming.map((event, i) => (
            <EventCard key={i} event={event} access_token={access_token} setAccess_token={setAccess_token} refresh_token={refresh_token} />
          ))}
        </CardContainer>

        <H3>Past Events ({past.length})</H3>
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
  )
}

export default FeedPage;