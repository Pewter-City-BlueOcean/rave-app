import React, { useState, useEffect } from 'react';
import {Outlet, Link} from "react-router-dom";
import Header from '../Header.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`
const Title = styled.nav`

`


const Layout = ({access_token, refresh_token}) => {
  return (
    <Wrapper>
      <Title>
          <Header access_token={access_token} refresh_token={refresh_token} />
      </Title>
      <Outlet />
    </Wrapper>
  )
}
export default Layout;