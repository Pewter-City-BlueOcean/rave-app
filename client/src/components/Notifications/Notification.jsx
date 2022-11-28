import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-family: Karla;
  color: #eeeee4;
`

const Notification = ({event_title, days}) => {
  const [ show, setShow ] = useState( );

  useEffect(() => {

  }, [])

  return (
    <div>
      <P>You have <b>{event_title}</b>{days === 0 ? ' today!' : ' in ' + days + ' days.'}</P>
    </div>
  )
}

export default Notification;