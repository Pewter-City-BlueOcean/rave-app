import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRaveStore } from './helpers/raveStore.js';

const H1 = styled.h1`
  font-family: KoHo;
  font-style: italic;
  font-size: 100px;
  color: #eeeee4;
  text-shadow: #000000 1px 0 14px;
  margin-bottom: 0;
`
const H2 = styled.h2`
  font-size: 20px;
  font-family: KoHo;
  color: #eeeee4;
  text-shadow: #000000 1px 0 14px;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`
const Title = styled.nav`
  display: flex;
  flex-direction: row;
  justifiy-content: flex-start;
`

const Header = ({access_token, refresh_token}) => {
  const params = new URLSearchParams({
    access_token: access_token,
    refresh_token: refresh_token,
  })

  return (
    <div>
      <Title>
        <H1>neuRAVE</H1>
      </Title>
      <div>
        <Nav>
          <Link to={`/feed?${params}`} style={{ textDecoration: 'none' }}><H2>home</H2></Link>
          <H2> | </H2>
          <Link to={`/discover?${params}`} style={{ textDecoration: 'none' }}><H2>discover</H2></Link>
          <H2> | </H2>
          <Link to={`/me?${params}`} style={{ textDecoration: 'none' }}><H2>profile</H2></Link>
        </Nav>
      </div>
    </div>
  )
}

export default Header;