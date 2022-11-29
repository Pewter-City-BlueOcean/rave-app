import React, { useState, useEffect, useRef } from 'react';
import { Card, Image, Text, Badge, Button, Group, Input, Title, HoverCard, Grid } from '@mantine/core';
import {SearchForm} from './SearchForm.jsx';
import EventCard from './EventCard.jsx';
import { FaInfo } from 'react-icons/fa';
import axios from 'axios';
import { useRaveStore } from '../helpers/raveStore.js';
import { getUserData } from '../helpers/getUserData.js';
import {H2, H3} from '../Styles.jsx';
import styled from 'styled-components';

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
`
const Container = styled.div`
  height:fit-content;
  max-height: 100vh ;
  overflow: auto;
`

const DiscoverPage = () => {

  const userId = useRaveStore((state) => state.userId);
  let state = useRef('');
  let city = useRef('');
  let eventArtistSearchTerm = useRef('');
  let maxPrice = useRef('');
  let minPrice = useRef('');

  const [events, setEvents] = useState([]);

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

  const searchExecute = () => {
    searchButtonHandler({
      state: state.current.value,
      city: city.current.value,
      eventArtistSearchTerm: eventArtistSearchTerm.current.value,
      minPrice: minPrice.current.value,
      maxPrice: maxPrice.current.value
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
        <Title order={1} align='center'>
          <H2>DISCOVER</H2>
        </Title>

        <DIV>
        <Container>
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
          <SearchForm searchButtonHandler={searchButtonHandler} searchExecute={searchExecute} city={city} state={state} eventArtistSearchTerm={eventArtistSearchTerm} maxPrice={maxPrice} minPrice={minPrice}/>
        </div>
        <div >
          <Grid align='center' gutter='xl' >
            {events.map((event)=> {
              return <EventCard key={event.group_id} event={event} userId={userId} searchExecute={searchExecute}/>
            })}
          </Grid>
        </div>
        </Container>
      </DIV>
      </div>
    )
  }
}

export default DiscoverPage;