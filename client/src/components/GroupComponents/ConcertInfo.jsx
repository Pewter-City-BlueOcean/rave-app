import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Attendees from './Attendees.jsx';
import ConcertDetails from './ConcertDetails.jsx';
import AddMember from './AddMember.jsx';
import Notification from './Notification.jsx';

const ConcertInfo = ({currentGroup}) => {
  const [groupId, setGroupId] = useState(currentGroup.group_id || window.location.href.split('id=')[1].split('&')[0]);

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
    </div>
  )
}

export default ConcertInfo;