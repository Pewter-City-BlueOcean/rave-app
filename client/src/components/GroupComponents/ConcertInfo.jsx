import React from 'react';
import Attendees from './Attendees.jsx';
import ConcertDetails from './ConcertDetails.jsx';
import AddMember from './AddMember.jsx';
import Notification from './Notification.jsx';
import EventMap from './EventMap.jsx';


const ConcertInfo = () => {
  return (
  <div>
    <ConcertDetails/>
    <Attendees/>
    <AddMember/>
    <Notification/>
    <EventMap address={'1940 9th Street NW'} extended_address={'Washington, DC 20001'}/>
  </div>

  )
}

export default ConcertInfo;