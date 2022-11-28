import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Attendees from './Attendees.jsx';
import ConcertDetails from './ConcertDetails.jsx';
import AddMember from './AddMember.jsx';
import Notification from './Notification.jsx';
import EventMap from './EventMap.jsx';


const ConcertInfo = ({currentGroup}) => {

  const [groupId, setGroupId] = useState(5761337);

  const [groupInfo, setGroupInfo] = useState({});

  const [members, setMembers] = useState([]);

  const getGroupMembers =() => {
    return axios.get('/groupMembers', {
      params:{
        group_id: groupId
      }
    })
    .then((result)=> {
      console.log(result.data);
      setMembers(result.data)
    })
  }

  const getGroupInfo = () => {
    return axios.get('/groupInfo', {
      params: {
        group_id: groupId
      }
    })
    .then((result)=> {
      setGroupInfo(result.data[0]);
    })
  }

  useEffect(()=> {
    if (!Object.keys(currentGroup).length) {
      getGroupInfo()
    } else {
      setGroupInfo(currentGroup);
      setGroupId(currentGroup.group_id);
    }
  },[])

  useEffect(()=> {
    getGroupMembers()
    .then((result)=> {
      getGroupMembers();
    })
  },[groupId])

  return (
    <div>
  {
    (Object.keys(groupInfo).length && members.length) &&
      <div className='concert-info'>
        <ConcertDetails groupInfo={groupInfo}/>
        {/* <Notification/> */}
        <Attendees members={members}/>
        <AddMember
        members={members}
        groupId={groupId}
        setMembers={setMembers}
      getGroupMembers={getGroupMembers}/>
      <EventMap address={'1940 9th Street NW'} extended_address={'Washington, DC 20001'}/>
    </div>
    }
    </div>
  )
}

export default ConcertInfo;