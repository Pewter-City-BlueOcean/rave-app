import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import spotify from './helper_functions/talkToSpotify.js';

import axios from 'axios';

import LandingPage from './pages/LandingPage.jsx';
import FeedPage from './pages/FeedPage.jsx';
import DiscoverPage from './pages/DiscoverPage.jsx';
import GroupPage from './pages/GroupPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

import Layout from './components/Layout.jsx';
import Background from './components/Background.jsx';
import WebPlayer from './components/WebPlayer.jsx';

const App = () => {
  const params = new URLSearchParams(window.location.search);

  const [access_token, setAccess_token] = useState(params.get('access_token'));
  const [refresh_token, setRefresh_token] = useState(params.get('refresh_token'));
  const [user, setUser] = useState();

  /**
   * Callback function used to update access_token upon a refresh
   *
   * @param {*} new_token - Our new access_token
   */
  const refreshCb = (new_token) => {
    setAccess_token(new_token);
  }

  /**
   * Upon receiving an access_token, we will get user from Spotify
   */
  useEffect(() => {
    // Check that we have just logged in
    if (!user && access_token) {

      // Ask spotify who I am and store to state
      const whoAmI = async () => {
        const me = await spotify.whoAmI(access_token, refresh_token, refreshCb);
        setUser(me);
      }

    }

  }, [access_token]);


  /**
   * Our render - if we have an access token, then we can move on from login, otherwise we show landing page.
   */
  return access_token ? (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FeedPage />} />
          <Route path="discover" element={<DiscoverPage />} />
          <Route path="group" element={<GroupPage />} />
          <Route path="me" element={<ProfilePage />} />
        </Route>
      </Routes>
      <Background />
      <WebPlayer access_token={access_token}/>
    </div>) : (
    <div>
      <LandingPage />
      <Background />
    </div>);
}

export default App;