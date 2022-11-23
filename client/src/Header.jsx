import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Header = () => {

  return (
    <div>
      <Title>
        <H1>neuRAVE</H1>
      </Title>
      <div>
        <Nav>
          <Link to="/feed" style={{ textDecoration: 'none' }}><H2>home</H2></Link>
          <H2> | </H2>
          <Link to="/discover" style={{ textDecoration: 'none' }}><H2>discover</H2></Link>
          <H2> | </H2>
          <Link to="/me" style={{ textDecoration: 'none' }}><H2>profile</H2></Link>
        </Nav>
      </div>
    </div>
  )
}

export default Header;