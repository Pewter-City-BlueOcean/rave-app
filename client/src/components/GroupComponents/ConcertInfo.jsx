import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Attendees from './Attendees.jsx';
import ConcertDetails from './ConcertDetails.jsx';
import AddMember from './AddMember.jsx';
import Notification from './Notification.jsx';
import EventMap from './EventMap.jsx';


const ConcertInfo = () => {
  return (
  <div className='concert-info'>
    <ConcertDetails groupInfo={groupInfo}/>
    <Notification/>
    <Attendees members={members}/>
    <AddMember
      members={members}
      groupId={groupId}
      setMembers={setMembers}
      getGroupMembers={getGroupMembers}/>
    <EventMap address={'1940 9th Street NW'} extended_address={'Washington, DC 20001'}/>
  </div>
  )
}

export default ConcertInfo;