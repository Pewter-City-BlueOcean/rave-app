import { Card, Image, Text, Badge, Button, Group, Input, Title, HoverCard, Grid } from '@mantine/core';
import React, { useState, useEffect} from 'react';
import axios from 'axios';


const EventCard = ({event}) => {

  let replaceMeLaterWithZuswang_individual_id = 12345;

  const convertDate =(dateInp) => {
    let dateFormated = new Date(dateInp);
    return `${dateFormated.toDateString()} at ${dateFormated.toLocaleTimeString()}`;
  }

  const buttonClickHandler = ()=> {
    axios({
      method: 'post',
      url: '/sg/events',
      data: {
        invididual_id: replaceMeLaterWithZuswang_individual_id,
        objEventData: event
      }
    })
    .then((val)=>{
      console.log(val);
    })
    .catch((err)=>{
      alert(err);
    })
  }

  return(
      <Grid.Col span={3}>
          <Card shadow="sm" p="lg" radius="md" withBorder style={{width: '250px', opacity: 0.6}} >
            <Card.Section component="a" href={'https://seatgeek.com/' + event.event_title + '-tickets'}>
              <Image src = {event.performers[0].image_url === 'https://seatgeek.com/images/performers-landscape/gritty-kitty-4fe6dc/800829/huge.jpg' ? 'https://www.lyfepyle.com/wp-content/uploads/2021/07/music-festival-1.jpg' : event.performers[0].image_url}
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="center" mt="md" mb="xs" >
              <Text weight={500} >{event.event_title}</Text>
            </Group>

            <Text weight={350} size="sm" >
              Artist: {event.performers[0].name}
            </Text>

            <Text weight={350} size="sm" >
              Locations: {event.state}, {event.city}
            </Text>

            <Text weight={350} size="sm" >
            Price: {event.average_price}
            </Text>
            <Text weight={350} size="sm" >
            Date: {convertDate(event.datetime_local)}
            </Text>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} onClick={buttonClickHandler}>ADD OR JOIN GROUP</Button>
          </Card>
      </Grid.Col>
  )
}

export default EventCard;