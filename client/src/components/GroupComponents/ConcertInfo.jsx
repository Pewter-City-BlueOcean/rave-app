import React, { useState, useEffect } from 'react';
import Attendees from './Attendees.jsx';
import ConcertDetails from './ConcertDetails.jsx';
import AddMember from './AddMember.jsx';
import EventMap from './EventMap.jsx';

const ConcertInfo = ( {eventInfo} ) => {
  const [members, setMembers] = useState([]);

  const handleSetMembers = (members) => {
    setMembers(members);
  }

  return (
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px', margin: '5px', padding: '30px'}}>
      <div>Notification</div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <EventMap address={eventInfo.address} extended_address={eventInfo.extended_address}/>
        <ConcertDetails eventInfo={eventInfo}/>
      </div>

      <Attendees groupId={eventInfo.group_id} handleSetMembers={handleSetMembers} members={members}/>
      <AddMember eventInfo={eventInfo} members={members} handleSetMembers={handleSetMembers}/>
    </div>

  )
}

export default ConcertInfo;