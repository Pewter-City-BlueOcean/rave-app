import React, { useState, useEffect, useRef } from 'react';
import {Button} from '@mantine/core';
import axios from 'axios';
import styled from 'styled-components';

const Label = styled.label`
  font-family: Karla;
  font-weight: 700;
  font-size: 18px;
  color: #eeeee4;
`
const Input = styled.input`
  display: flex;
  font-family: Karla;
  font-size: 15px;
  padding: 10px 0 10px 0;
  width: 230px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
`

export const SearchForm = ({searchButtonHandler, searchExecute, city, state, eventArtistSearchTerm, maxPrice, minPrice}) => {

  return (
    <div>
      <div style={{display: 'flex', columnGap: '75px', justifyContent: 'center', paddingBottom: '50px', padding: '50px'}}>
        <div>
          <Label>Event/Artist</Label>
          <Input ref={eventArtistSearchTerm} type = "text" placeholder="...Example: Ubbi Dubbi" ></Input>
        </div>
        <div>
          <Label>City</Label>
          <Input ref={city} placeholder="...Example: Dallas " type = "text"></Input>
        </div>
        <div>
          <Label>State</Label>
          <Input ref={state} placeholder="...Example: TX" type = "textarea" maxLength="2"></Input>
        </div>
        <div>
          <Label>Minimum Price ($)</Label>
          <Input ref={minPrice} placeholder="...Enter minimum price" type = "number"></Input>
        </div>
        <div>
          <Label>Maximum Price ($)</Label>
          <Input ref={maxPrice} placeholder="...Enter minimum price" type = "number"></Input>
        </div>
      </div>
      <div style={{ paddingBottom: '50px' }}>
        <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} size='lg' style={{fontFamily: 'Karla'}} onClick={searchExecute}>Search</Button>
      </div>
    </div>
  )
}