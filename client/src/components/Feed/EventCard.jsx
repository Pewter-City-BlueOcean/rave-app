import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 150px;
  height: 150px;
  margin: 25px;
  background: #000000;
  opacity: 0.8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`
const H4 = styled.h4`
  font-size: 20px;
  color: #eeeee4;
`

const EventCard = ({event}) => {

  const handleClick = () => {
    alert(event.event_title);
  }

  return (
    <div>
      <Card onClick={(e) => handleClick()}>
        <H4>{event.event_title}</H4>
      </Card>
    </div>
  )
}

export default EventCard;