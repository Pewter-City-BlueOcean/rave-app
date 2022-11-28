import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRaveStore } from './helpers/raveStore.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // border: dotted;
  height: 200px;
`
const H1 = styled.h1`
  font-family: KoHo;
  font-style: italic;
  font-size: 100px;
  color: #eeeee4;
  margin: 0 0 0 5% ;
`
const H2 = styled.h2`
  font-size: 25px;
  font-family: KoHo;
  font-style: bold;
  color: #eeeee4;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
  margin: 0 5px 25px 0;
`
const Title = styled.nav`
  display: flex;
  flex-direction: row;
  justifiy-content: flex-start;
  border: solid;
`

const Header = ({access_token, refresh_token}) => {
  const params = new URLSearchParams({
    access_token: access_token,
    refresh_token: refresh_token,
  })

  return (
    <Wrapper>
        <H1>neuRAVE</H1>
          <Nav>
            <Link to={`/feed?${params}`} style={{ textDecoration: 'none' }}><H2>home</H2></Link>
            <H2> | </H2>
            <Link to={`/discover?${params}`} style={{ textDecoration: 'none' }}><H2>discover</H2></Link>
            <H2> | </H2>
            <Link to={`/me?${params}`} style={{ textDecoration: 'none' }}><H2>profile</H2></Link>
          </Nav>
    </Wrapper>
  )
}

export default Header;