import React from 'react';
import Attendees from './Attendees.jsx';
import ConcertDetails from './ConcertDetails.jsx';
import AddMember from './AddMember.jsx';
import Notification from './Notification.jsx';

const ConcertInfo = () => {
  return (
  <div>
    <ConcertDetails/>
    <Attendees/>
    <AddMember/>
    <Notification/>
  </div>

  )
}

export default ConcertInfo;