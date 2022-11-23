import React, { useState, useEffect } from 'react';
import {Outlet, Link} from "react-router-dom";
import Header from '../Header.jsx';

const Layout = ({access_token, refresh_token}) => {
  return (
    <div>
      <Header access_token={access_token} refresh_token={refresh_token} />
      <Outlet />
    </div>
  )
}
export default Layout;