import React from 'react';
import { ConcertInfo, Chat} from '../components/GroupComponents/index.js'

const GroupPage = () => {

  return (

  <div>
    <div>
      <Chat/>
      <ConcertInfo/>
    </div>
    <div>Music Player</div>
  </div>

  )
}

export default GroupPage;