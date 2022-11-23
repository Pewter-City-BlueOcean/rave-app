import React, {useState, useEffect} from 'react';
import { ConcertInfo, Chat} from '../components/GroupComponents/index.js'
import axios from 'axios';

const GroupPage = () => {

  const [groupId, setGroupId] = useState(5757673);

  return (

  <div>
    <div>Header</div>
    <div className='group-concert'>
      <Chat/>
      <ConcertInfo groupId={groupId} />
    </div>
    <div>Music Player</div>
  </div>

  )
}

export default GroupPage;