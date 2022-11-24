import React, { useState, useEffect } from 'react';
import { Card, Image, Text, Badge, Button, Group, Input, Title, HoverCard, Grid } from '@mantine/core';
import {SearchForm} from './SearchForm.jsx';
import EventCard from './EventCard.jsx';
import { FaInfo } from 'react-icons/fa';
import axios from 'axios';

import { useRaveStore } from '../helpers/raveStore.js';
import { getUserData } from '../helpers/getUserData.js';

const DiscoverPage = () => {

  const userId = useRaveStore((state) => state.userId);

  useEffect(() => {
    getUserData(userId).then(results => {
    })
  }, [userId])
  const [events, setEvents] = useState([])

  const searchButtonHandler = (dataToSend) => {
    axios({
      method: 'GET',
      url: '/sg/events',
      params: dataToSend
    })
    .then((data) => {
      setEvents(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    searchButtonHandler({
      state: '',
      city: '',
      eventArtistSearchTerm: '',
      minPrice: '',
      maxPrice: ''
    });
  }, [])

  if (!userId) {
    return <div>...loading</div>
  } else {
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
        <div style={{marginLeft: '20px', marginRight: '20px'}}>
          <SearchForm searchButtonHandler={searchButtonHandler} />
        </div>
        <div >
          <Grid align='center' gutter='xl' >
            {events.map((event, index)=> {
              return <EventCard key={index} event={event} userId={userId} searchButtonHandler={searchButtonHandler}/>
            })}
          </Grid>
        </div>
      </div>
    )
  }
}

export default DiscoverPage;