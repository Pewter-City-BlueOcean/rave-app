import React from 'react';
import styled from 'styled-components';
import { MantineProvider, Tabs } from '@mantine/core';

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
`;

const About = styled.div`
  width: 70vh;
  background: rgba(0, 0, 0, 0.5);
  margin: 5px;
  border-radius: 10px;
`;

const Sidebar = styled.div`
  width: 30vh;
  background: rgba(0, 0, 0, 0.5);
  margin: 5px;
  border-radius: 10px;
`;

const ProfilePage = () => {

  return (
  <Outer>
    <Profile>
      <MantineProvider theme={{colorScheme: 'dark'}}>

      <About>
        {/* Insert About here */}
      </About>
      <Sidebar>
        <Tabs color="dark" radius="md" defaultValue="Upcoming">
        <Tabs.List>
          <Tabs.Tab value="Upcoming" >Upcoming</Tabs.Tab>
          <Tabs.Tab value="Past" >Past</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Upcoming" pt="xs">
          Gallery tab content
        </Tabs.Panel>

        <Tabs.Panel value="Past" pt="xs">
          Messages tab content
        </Tabs.Panel>

        </Tabs>
      </Sidebar>
    </MantineProvider>
    </Profile>
  </Outer>
  )
}

export default ProfilePage;