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
  const handlers = {
    setAccess_token: (new_token) => {
      setAccess_token(new_token);
    }
  }

  /**
   * Get username upon sign-in and use to retrieve user id from database
   */
  useEffect(() => {
    if (!user && access_token) {
      const getUsername = async () => {
        const username = await spotify.whoAmI(access_token, refresh_token, handlers.setAccess_token);

        return username;
      }

      /**
       * Get username for table lookup id
       */
      getUsername()
        .then((username) => {
          //console.log(username);
        })

    }
  }, [access_token])

  return access_token ? (
    <div>
      <Routes>
        <Route path="/" element={<Layout access_token={access_token} refresh_token={refresh_token}/>}>
          <Route path="feed" element={<FeedPage />} />
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