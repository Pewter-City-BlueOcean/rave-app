import React, {useState, useEffect} from 'react';
import { ConcertInfo, Chat} from '../components/GroupComponents/index.js'
import axios from 'axios';
import { useRaveStore } from '../helpers/raveStore.js';

const GroupPage = () => {

  const currentGroup = useRaveStore((state) => state.currentGroup);

  return (
  <div>
    <div>Header</div>
    <div className='group-concert'>
      {/* <Chat/> */}
      <ConcertInfo
        currentGroup={currentGroup}
       />
    </div>
    <div>Music Player</div>
  </div>
  )
}

export default GroupPage;