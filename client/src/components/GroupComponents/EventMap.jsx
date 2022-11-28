import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const MapContainer = styled.div`
width: 90%;
aspect-ratio: 4/3;
box-sizing: border-box;
`
const MapFrame = styled.iframe`
box-sizing: border-box;
border-radius: 10px;
width: 100%;
height: 100%;
-webkit-filter: invert(90%);
filter: invert(90%);
border: 3pt solid black;
`

const EventMap = ({ address, extended_address }) => {
  const makeAddressStr = () => {
    const addr1 = address.replaceAll(' ', '+');
    const addr2 = extended_address.replaceAll(' ', '+');
    const addrStr = 'Name,' + addr1 + '+' + addr2;
    return addrStr;
  }

  return (
    <MapContainer>
      <MapFrame
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.MAPS_API_KEY}
&q=${makeAddressStr()}`}>
      </MapFrame>
    </MapContainer>
  )
}

export default EventMap;