import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { getUserData } from '../helpers/getUserData.js';

import { useRaveStore } from '../helpers/raveStore.js';
import { ConcertInfo, Chat} from '../components/GroupComponents/index.js'
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
  const userId = useRaveStore((state) => state.userId);
  const [user, setUser] = useState();

  useEffect(() => {
    if (userId) {
      getUserData(userId).then(results => {
        setUser(results.data[0]);
      })
    }
  }, [userId])

  return (

  <div>
    <div style={{display: 'flex', flexDirection:'row'}}>
      <div>
        <PlaylistContainer>
          <Playlist
            access_token={access_token}
            refresh_token={refresh_token}
            setAccess_token={setAccess_token}
            isOwner={true}
            user={user}
          />
        </PlaylistContainer>
        <Chat/>
      </div>
      <ConcertInfo eventInfo={group}/>
    </div>
  </div>

  )
}

export default GroupPage;