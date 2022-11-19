import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import LandingPage from './pages/LandingPage.jsx';
import FeedPage from './pages/FeedPage.jsx';
import DiscoverPage from './pages/DiscoverPage.jsx';
import GroupPage from './pages/GroupPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

import Layout from './components/Layout.jsx';

const App = () => {
  const params = new URLSearchParams(window.location.search);
  const pages = ['landing', 'feed', 'discover', 'search', 'events'];

  const [access_token, setAccess_token] = useState(params.get('access_token'));
  const [refresh_token, setRefresh_token] = useState(params.get('refresh_token'));

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="feed" element={<FeedPage />} />
          <Route path="discover" element={<DiscoverPage />} />
          <Route path="group" element={<GroupPage />} />
          <Route path="me" element={<ProfilePage />} />
        </Route>
      </Routes>
  );
}

export default App;