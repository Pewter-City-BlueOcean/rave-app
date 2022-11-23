import React, { useState, useEffect } from 'react';
import { Card, Image, Text, Badge, Button, Group, Input, Title } from '@mantine/core';

const DiscoverPage = () => {
  //form with three inputs
  //location, event name, artist name; distance and price
  //search DB
  const [searchCriteria, setSearchCriteria] = useState({
    eventName: '',
    artist: '',
    location: '',
    minPrice: '',
    maxPrice: ''
  })

  return (
    <div>
      <Title order={1} align='center' variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} style={{padding: '50px'}} >
        DISCOVER
      </Title>
      <div style={{display: 'flex', columnGap: '50px', justifyContent: 'center', paddingBottom: '50px', padding: '50px'}}>
        <Input variant="filled" placeholder="...Event" style={{width: '205px', displayType: 'flex', opacity: '.6' }}/>
        <Input variant="filled" placeholder="...Artist" style={{width: '205px', displayType: 'flex', opacity: '.6' }}/>
        <Input variant="filled" placeholder="...Location" style={{width: '205px', opacity: '.6' }}/>
        <Input variant="filled" placeholder="...Min Price" style={{width: '205px', opacity: '.6' }}/>
        <Input variant="filled" placeholder="...Max Price" style={{width: '205px', opacity: '.6' }}/>
      </div>
      <div style={{ paddingBottom: '50px' }}>
        <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} size='lg'>Search</Button>
      </div>
      <div style={{display: 'flex', columnGap: '50px', justifyContent: 'center'}}>
        <Card shadow="sm" p="lg" radius="md" withBorder style={{width: '250px', opacity: 0.6}} >
          <Card.Section component="a" href="https://mantine.dev/">
            <Image
              src="https://www.lyfepyle.com/wp-content/uploads/2021/07/music-festival-1.jpg"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group position="center" mt="md" mb="xs" >
            <Text weight={500} >Event Name</Text>
          </Group>

          <Text weight={350} size="sm" >
            Artist: Raver Santa
          </Text>

          <Text weight={350} size="sm" >
            Locations: North Pole, Antarctica
          </Text>

          <Text weight={350} size="sm" >
          Price: Free (If on Nauty list)
          </Text>

          <Text weight={350} size="sm" >
          Date: 12/25/2022
          </Text>
          <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>DYNAMIC ADD OR JOIN</Button>
        </Card>
      </div>
<<<<<<< Updated upstream
=======
      <div style={{ justifyContent: 'spaced-evenly' }}>
        <Grid justify='pace-around'>
          {events.map((event, index)=> {
            return <EventCard key={index} event={event}/>
          })}
        </Grid>
      </div>
>>>>>>> Stashed changes
    </div>
  )
}

export default DiscoverPage;