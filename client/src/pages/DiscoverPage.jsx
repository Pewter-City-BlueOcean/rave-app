import React, { useState, useEffect } from 'react';
import { Card, Image, Text, Badge, Button, Group, Input, Title, HoverCard, Grid } from '@mantine/core';
import {SearchForm} from './SearchForm.jsx';
import EventCard from './EventCard.jsx';
import { FaInfo } from 'react-icons/fa';
import axios from 'axios';

const DiscoverPage = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    let dataToSend = {
      state: '',
      city: '',
      eventArtistSearchTerm: '',
      minPrice: '',
      maxPrice: ''
    }
    axios.get('/sg/events', (dataToSend))
    .then((data) => {
      setEvents(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <Title order={1} align='center' variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} style={{padding: '50px'}} >
        DISCOVER
      </Title>
      <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
      <Group >
        <HoverCard width={280} shadow="md">
          <HoverCard.Target>
            <Button style={{ alignItems:'center', justifyContent:'center', width:45, height:45, borderRadius:50}}><FaInfo size={15}/></Button>
          </HoverCard.Target>
          <HoverCard.Dropdown style={{ backgroundColor: 'green', borderColor: 'green' }}>
            <Text size="sm" style={{ color: 'yellow' }}>
              No fields are mandatory! Search to your hearts content!
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
      </div>
      <div>
        <SearchForm setEvents={setEvents} />
      </div>
      <Grid justify='space-around' align='stretch' style={{paddingLeft: '230px', paddingRight: '100px'}} >
        {events.map((event, index)=> {
          return <EventCard key={index} event={event}/>
        })}
      </Grid>
    </div>
  )
}

export default DiscoverPage;