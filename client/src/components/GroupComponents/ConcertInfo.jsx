import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Attendees from './Attendees.jsx';
import ConcertDetails from './ConcertDetails.jsx';
import AddMember from './AddMember.jsx';
import Notification from './Notification.jsx';
import EventMap from './EventMap.jsx';


const ConcertInfo = ({groupId}) => {

  const [groupInfo, setGroupInfo] = useState({});

  const [members, setMembers] = useState([]);

  const getGroupInfo = () => {
    return axios.get('/groupInfo',{
      params: {
        group_id: groupId
      }
    })
    .then((result)=> {
      setGroupInfo(result.data);
    })
  }

  const getGroupMembers =() => {
    return axios.get('/groupMembers', {
      params:{
        group_id: groupId
      }
    })
    .then((result)=> {
      console.log(result);
      // setMembers(result.data)
    })
  }

  useEffect(()=> {
    getGroupInfo()
    .then((result)=> {
      getGroupMembers();
    })
    .catch((err)=> {
      console.log(err);
    })
  },[groupId])

  return (
  <div className='concert-info'>
    {/* <ConcertDetails groupInfo={groupInfo}/> */}
    <Notification/>
    {/* <Attendees members={members}/>
    <AddMember
      members={members}
      groupId={groupId}
      setMembers={setMembers}
      getGroupMembers={getGroupMembers}/> */}
    <EventMap address={'1940 9th Street NW'} extended_address={'Washington, DC 20001'}/>
  </div>
  )
}

export default ConcertInfo;