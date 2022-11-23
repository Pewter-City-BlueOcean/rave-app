import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Image, Text, Badge, Button, Group, Input, Title } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { useRaveStore } from '../../helpers/raveStore.js';

const Wrapper = styled.div`


`
const H4 = styled.h4`
  font-size: 20px;
  color: #eeeee4;
`

const EventCard = ({event}) => {

  const setCurrentGroup = useRaveStore((state) => state.setCurrentGroup);
  const currentGroup = useRaveStore((state) => state.currentGroup);
  let navigate = useNavigate();

  const routeChange = () => {
    setCurrentGroup(event);
    console.log(currentGroup);
    let path = '/group';
    navigate(path);
  }

  return (
    <Wrapper onClick={(e)=> routeChange()}>
      <Card shadow="sm" p="lg" radius="md" withBorder style={{width: '250px', opacity: 0.75, margin:'40 px'} } >
          <Card.Section component="a">
            <Image
              src={event.performers[0].image_url}
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group position="center" mt="md" mb="xs" >
            <Text weight={500} >{event.event_title}</Text>
          </Group>

          <Text weight={350} size="sm" >
            Artist: {event.performers.map((artist, i) => `${artist.name}${i < event.performers.length - 1 ? ', ' :'' }`)}
          </Text>

          <Text weight={350} size="sm" >
            Location: {event.city}
          </Text>

          <Text weight={350} size="sm" >
          Date: {new Date(event.datetime_local).toDateString()}
          </Text>
        </Card>
    </Wrapper>
  )
}

export default EventCard;