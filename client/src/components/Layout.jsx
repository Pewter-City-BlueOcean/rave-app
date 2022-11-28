import React, { useState, useEffect } from 'react';
import {Outlet, Link} from "react-router-dom";
import Header from '../Header.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.nav`
  position:fixed;
  top: 0;
  width: 90%;
`
const Body = styled.nav`
  margin-top: 100px;
  // margin-left: 100px;
  // border: dotted;
  width: 90%;
`


const Layout = ({access_token, refresh_token}) => {
  return (
    <Wrapper>
      <Title>
        <Header access_token={access_token} refresh_token={refresh_token} />
      </Title>
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  )
}
export default Layout;