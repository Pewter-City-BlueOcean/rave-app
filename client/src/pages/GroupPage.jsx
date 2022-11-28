import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { useRaveStore } from '../helpers/raveStore.js';
import ConcertInfo from '../components/GroupComponents/ConcertInfo.jsx';
import Chat from '../components/GroupComponents/Chat.jsx';
import Playlist from '../components/Playlist.jsx';

const PlaylistContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  margin: 5px;
  border-radius: 5px;
  color: white;
  padding: 0.35vh;
`;

const GroupPage = ({ access_token, refresh_token, setAccess_token }) => {
  const group = useRaveStore((state) => state.currentGroup);

  console.log(group)

  const currentGroup = useRaveStore((state) => state.currentGroup);

  return (
  <div>
    <div style={{display: 'flex', flexDirection:'row'}}>
      <div>
        <PlaylistContainer>
          <Playlist />
        </PlaylistContainer>
      </div>
      <div className='group-concert'>
        <Chat/>
        <ConcertInfo currentGroup={currentGroup}/>
      </div>
     </div>
  </div>
  )
}

export default GroupPage;