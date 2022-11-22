import React, { useState, useEffect } from 'react';
import {Outlet, Link} from "react-router-dom";
import Header from '../Header.jsx';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
export default Layout;