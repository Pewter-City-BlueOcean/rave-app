import React, { useState, useEffect } from 'react';
import Notification from './Notification.jsx';
import { getDaysFromToday } from '../../helpers/time_helpers.js';
import groups from '../data/group_data';
import styled from 'styled-components';

const NotificationContainer = styled.div`
  width: 200px;
  padding: 18px;
  transition: 1s;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;
const NotificationListContainer = styled.div`
padding: 0 18px;
display: ${props => props.show ? 'block' : 'none'};
overflow: hidden;
`;

const NotificationList = () => {
  const [numNotifications, setNumNotifications] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);

  const calcNumNotifications = () => {
    let nNotif = 0;
    groups.forEach((group) => {
      let days = getDaysFromToday(group.datetime_local);
      if (days >= 0 && days <= group.notification) nNotif++;
    });
    setNumNotifications(nNotif);
  };

const handleClick = () => {
  console.log('clicked!');
  setShowNotifications(!showNotifications);
}

  useEffect(() => {
    calcNumNotifications();
  }, [groups]);

  return (
    <NotificationContainer onClick={handleClick}>
      <h3>Notifications ({numNotifications})</h3>
      <NotificationListContainer show={showNotifications}>
        {groups.map((group, i) => {
          const days = getDaysFromToday(group.datetime_local);
          if (days >= 0 && days <= group.notification) {
            return <Notification key={group + i} event_title={group.event_title} days={days} />
          }
        })}
      </NotificationListContainer>
    </NotificationContainer>
  )
}

export default NotificationList;