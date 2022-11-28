import { Card, Image, Text, Badge, Button, Group, Input, Title, HoverCard, Grid } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const STEXT = styled(Text)`
  font-family: Karla;
`

const EventCard = ({event, userId, searchExecute}) => {

  const convertDate =(dateInp) => {
    let dateFormated = new Date(dateInp);
    return `${dateFormated.toDateString()} at ${dateFormated.toLocaleTimeString()}`;
  }

  const getButtonLabel = () => {
    if (event.group_members.length === 0) {
      return 'Create New Group';
     } else if (event.group_members.includes(userId)) {
      return 'Already a Group Member';
     } else {
      return 'Join Group';
     };
  }

  const [buttonLabel, setButtonLabel] = useState(getButtonLabel())

  useEffect(()=> {
    setButtonLabel(getButtonLabel())
  }, [event])

  const buttonClickHandler = ()=> {
    axios({
      method: 'post',
      url: '/sg/events',
      data: {

        invididual_id: userId,
        objEventData: event
      }
    })
    .then((val)=>{
      searchExecute()
    })
    .catch((err)=>{
      alert(err);
    })
  }

  return(
      <Grid.Col span={3} style={{padding: '50px' }} >
          <Card shadow="sm" p="lg" radius="md" style={{width: '300px', margin:'40 px'}} >
            <Card.Section component="a" href={'https://seatgeek.com/' + event.event_title + '-tickets'}>
              <Image src = {event.performers[0].image_url === 'https://seatgeek.com/images/performers-landscape/gritty-kitty-4fe6dc/800829/huge.jpg' ? 'https://www.lyfepyle.com/wp-content/uploads/2021/07/music-festival-1.jpg' : event.performers[0].image_url}
                height={250}
                alt="Norway"
              />
            </Card.Section>

            <Group position="center" mt="md" mb="xs" >
              <STEXT weight={800} size="lg" >{event.event_title.toUpperCase()}</STEXT>
            </Group>
{/*
            <Text weight={350} size="sm" >
              Artist: {event.performers[0].name}
            </Text> */}

            <STEXT weight={350} size="sm" >
              {event.state}, {event.city}
            </STEXT>

            <STEXT weight={350} size="sm" >
            ${event.average_price}
            </STEXT>
            <STEXT weight={350} size="sm" >
            {convertDate(event.datetime_local)}
            </STEXT>
            <Button variant="gradient" disabled={buttonLabel === 'Already a Group Member'? true : false} gradient={{ from: 'teal', to: 'blue', deg: 60 }} onClick={buttonClickHandler}>{buttonLabel}</Button>
          </Card>
      </Grid.Col>
  )
}

export default EventCard;