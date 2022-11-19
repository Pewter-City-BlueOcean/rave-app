import React, { useState } from 'react';

import LandingPage from './pages/LandingPage.jsx';
import FeedPage from './pages/LandingPage.jsx';
import DiscoverPage from './pages/LandingPage.jsx';
import GroupPage from './pages/LandingPage.jsx';
import ProfilePage from './pages/LandingPage.jsx';

const App = () => {
  const [access_token, setAccess_token] = useState();
  const [refresh_token, setRefresh_token] = useState();

  const [page, setPage] = useState(0);

  const pages = ['landing', 'feed', 'discover', 'search', 'events'];

  let render;

  if (page === 0) {
    render =
      <LandingPage auth={{
        access_token: access_token,
        refresh_token: refresh_token
      }}/>

  } else if (page === 1) {
    render =
      <FeedPage auth={{
        access_token: access_token,
        refresh_token: refresh_token
      }}/>

  } else if (page === 2) {
    render = <DiscoverPage auth={{
        access_token: access_token,
        refresh_token: refresh_token
      }}/>

  } else if (page === 3) {
    render = <GroupPage auth={{
      access_token: access_token,
      refresh_token: refresh_token
    }}/>

  } else if (page === 4) {
    render = <ProfilePage auth={{
      access_token: access_token,
      refresh_token: refresh_token
    }}/>
  }

  console.log(render)

  return render;
}

export default App;
