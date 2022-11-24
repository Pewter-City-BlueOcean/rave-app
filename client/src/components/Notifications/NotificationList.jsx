import React, { useState, useEffect } from 'react';
import Notification from './Notification.jsx';
import { getDaysFromToday } from '../../helpers/time_helpers.js';
//import groups from '../data/group_data';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const NotificationHeader = styled.div`
box-sizing: border-box;
border: 1pt solid blue;
border-radius: 5px 5px ${props => (props.show ? '0px 0px' : '5px 5px')};
background: rgba(0, 0, 0, 0.46);
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
color: #444;
cursor: pointer;
padding: 18px;
width: 100%;
border: none;
text-align: left;
outline: none;
font-size: 15px;
transition: 0.2s;
&:hover {
  background-color: #ccc;
};
`;

const NotificationListContainer = styled.div`
`

const NotificationContainer = styled.div`
border: ${props => (props.show ? '1pt solid #aaa' : '')};
border-top: 0pt;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
height: fit-content;
padding: 0 18px;
background-color: white;
max-height: ${props => (props.show ? '75' : '0')}px;
overflow: hidden;
transition: max-height 0.3s ease-out;
&:last-child {
  border-radius: 0 0 5px 5px;
};
`;

const NotificationList = ({ groups }) => {
  const [notifications, setNotifications] = useState([]);
  const [numNotifications, setNumNotifications] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);

  const updateNotifications = () => {
    if (groups !== undefined) {
      let newNotifications = [];
      groups.forEach((group) => {
        let days = getDaysFromToday(group.datetime_local);
        if (days >= 0 && days <= group.notification) {
          newNotifications.push({
            event_title: group.event_title,
            days
          })
        }
      });
      setNotifications(newNotifications);
    }
  };

  const handleClick = () => {
    if (notifications.length > 0) setShowNotifications(!showNotifications);
  }

  useEffect(() => {
    updateNotifications();
  }, [groups]);

  return (
    <div>
      <NotificationHeader show={showNotifications} onClick={handleClick}>
        <h3>Notifications ({notifications.length})</h3>
        {notifications.length > 0 &&
          <div>
            {showNotifications ?
              <FontAwesomeIcon icon={faMinus} /> :
              <FontAwesomeIcon icon={faPlus} />}
          </div>
        }
      </NotificationHeader>
      <NotificationListContainer>
        {notifications.map((notification, i) => (
          <NotificationContainer key={notification + i} show={showNotifications}>
            <Notification event_title={notification.event_title} days={notification.days} />
          </NotificationContainer>
        ))}
      </NotificationListContainer>
    </div>
  )
}

export default NotificationList;