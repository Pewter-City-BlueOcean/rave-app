import React, { useState, useEffect } from 'react';
import {Outlet, Link} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/feed">Home</Link>
            </li>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div> */}
      <Outlet />
    </div>
  )
}
export default Layout;