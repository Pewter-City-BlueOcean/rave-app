import React, {useState, useEffect} from 'react';
import { ConcertInfo, Chat} from '../components/GroupComponents/index.js'
import axios from 'axios';
import { useRaveStore } from '../helpers/raveStore.js';

const GroupPage = () => {

  const [groupId, setGroupId] = useState(5753906);

  const currentGroup = useRaveStore((state) => state.currentGroup);

  useEffect(()=> {
    setGroupId(currentGroup);
  },[currentGroup])

  return (

  <div>
    <div>Header</div>
    <div className='group-concert'>
      {/* <Chat/> */}
      <ConcertInfo groupId={groupId} />
    </div>
    <div>Music Player</div>
  </div>

  )
}

export default GroupPage;