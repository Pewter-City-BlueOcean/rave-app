import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Attendees from './Attendees.jsx';
import ConcertDetails from './ConcertDetails.jsx';
import AddMember from './AddMember.jsx';
import Notification from './Notification.jsx';

const ConcertInfo = ({groupId}) => {

  const [groupInfo, setGroupInfo] = useState({});
  const [members, setMembers] = useState([]);

  const getGroupMembers = () => {
    axios.get('/groupMembers', {
      params: {
        group_id: groupId
      }
    })
    .then((result)=> {
      setMembers(result.data);
    })
  }

  const getGroupInfo = () => {
    return axios.get('/groupInfo',{
      params: {
        group_id: groupId
      }
    })
    .then((result) => {
      setGroupInfo(result.data[0]);
    })
  }

  useEffect(()=> {
    getGroupInfo()
    .then((result)=> {
      getGroupMembers();
    })
  },[groupId])


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
  </div>
  )
}

export default ConcertInfo;