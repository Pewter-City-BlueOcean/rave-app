import React from 'react';
import Attendees from './Attendees.jsx';
import ConcertDetails from './ConcertDetails.jsx';
import AddMember from './AddMember.jsx';
import Notification from './Notification.jsx';
import EventMap from './EventMap.jsx';


const ConcertInfo = ( {eventInfo} ) => {

  return (
  <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px', margin: '5px', padding: '30px'}}>
    <Notification />
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <EventMap address={eventInfo.address} extended_address={eventInfo.extended_address}/>
      <ConcertDetails eventInfo={eventInfo}/>
    </div>

    <Attendees groupId={eventInfo.group_id} />
    <AddMember />
  </div>

  )
}

export default ConcertInfo;