import React, { useState, useEffect, useRef } from 'react';
import {Button} from '@mantine/core';
import axios from 'axios';

export const SearchForm = ({searchButtonHandler, searchExecute, city, state, eventArtistSearchTerm, maxPrice, minPrice}) => {

  return (
    <div>
      <div style={{display: 'flex', columnGap: '75px', justifyContent: 'center', paddingBottom: '50px', padding: '50px'}}>
        <div>
          <label style={{color: 'yellow'}}>Event/Artist</label>
          <input ref={eventArtistSearchTerm} type = "text" placeholder="...Enter Event/Artist" style={{width: '230px', displayType: 'flex', opacity: '.8', borderRadius: '100px', textAlign: 'center' }} ></input>
        </div>
        <div>
          <label style={{color: 'yellow'}} >City</label>
          <input ref={city} placeholder="...Enter city" type = "text" style={{width: '230px', displayType: 'flex', opacity: '.8', borderRadius: '100px', textAlign: 'center' }}></input>
        </div>
        <div>
          <label style={{color: 'yellow'}} >State</label>
          <input ref={state} placeholder="...Example: TX" type = "textarea" maxLength="2" style={{width: '230px', displayType: 'flex', opacity: '.8', borderRadius: '100px', textAlign: 'center' }}></input>
        </div>
        <div>
          <label style={{color: 'yellow'}} >Minimum Price ($)</label>
          <input ref={minPrice} placeholder="...Enter minimum price" type = "number" style={{width: '230px', displayType: 'flex', opacity: '.8', borderRadius: '100px', textAlign: 'center' }}></input>
        </div>
        <div>
          <label style={{color: 'yellow'}} >Maximum Price ($)</label>
          <input ref={maxPrice} placeholder="...Enter minimum price" type = "number" style={{width: '230px', displayType: 'flex', opacity: '.8', borderRadius: '100px', textAlign: 'center' }}></input>
        </div>
      </div>
      <div style={{ paddingBottom: '50px' }}>
        <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} size='lg' onClick={searchExecute}>Search</Button>
      </div>
    </div>
  )
}