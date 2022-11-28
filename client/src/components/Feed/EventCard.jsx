import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Image, Text, Badge, Button, Group, Input, Title } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { useRaveStore } from '../../helpers/raveStore.js';

const Wrapper = styled.div`
  margin: 25px;

`
const H4 = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: KoHo;
  font-size: 20px;
  color: #eeeee4;
`
const STEXT = styled(Text)`
  font-family: Karla;
`

const EventCard = ({ event, access_token, refresh_token, setAccess_token}) => {

  const setCurrentGroup = useRaveStore((state) => state.setCurrentGroup);
  const currentGroup = useRaveStore((state) => state.currentGroup);

  let navigate = useNavigate();

  const routeChange = () => {
    setCurrentGroup(event);
    console.log(currentGroup);
    let path = '/group?' +
      new URLSearchParams({
        id: event.group_id,
        access_token: access_token,
        refresh_token: refresh_token,
      });
    navigate(path);
  }

  return (
    <Wrapper onClick={(e)=> routeChange()}>
      <Card shadow="sm" p="lg" radius="md" style={{width: '250px', margin:'40 px', opacity: '0.8'}} >
          <Card.Section component="a" style={{position: 'relative',
  textAlign: 'center'}}>

            <Image
              src={event.performers[0].image_url}
              alt="Norway"
            />
          </Card.Section>

          <Group position="center" mt="md" mb="xs" >
              <STEXT weight={800} size="lg" >{event.event_title.toUpperCase()}</STEXT>
          </Group>

          <STEXT weight={350} size="sm" >
            {event.city}
          </STEXT>

          <STEXT weight={350} size="sm" >
            {new Date(event.datetime_local).toDateString()}
          </STEXT>
        </Card>
    </Wrapper>
  )
}

export default EventCard;