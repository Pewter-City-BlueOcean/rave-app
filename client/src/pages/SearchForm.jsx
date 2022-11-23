import React, { useState, useEffect, useRef } from 'react';
import {Button} from '@mantine/core';
import axios from 'axios';
// import router from '../../../server/routes/sg.js';



export const SearchForm = ({searchButtonHandler}) => {
  let state = useRef('');
  let city = useRef('');
  let eventArtistSearchTerm = useRef('');
  let maxPrice = useRef('');
  let minPrice = useRef('');



  return (
    <div>
      <div style={{display: 'flex', columnGap: '75px', justifyContent: 'center', paddingBottom: '50px', padding: '50px'}}>
        <div>
          <label style={{color: 'yellow'}}>Event/Artist</label>
          <input ref={eventArtistSearchTerm} type = "text" placeholder="...Enter Event/Artist" style={{width: '205px', displayType: 'flex', opacity: '.4', borderRadius: '100px' }} ></input>
        </div>
        <div>
          <label style={{color: 'yellow'}} >City</label>
          <input ref={city} placeholder="...Enter city" type = "text" style={{width: '205px', displayType: 'flex', opacity: '.4', borderRadius: '100px' }}></input>
        </div>
        <div>
          <label style={{color: 'yellow'}} >State</label>
          <input ref={state} placeholder="...Example: TX" type = "textarea" maxLength="2" style={{width: '205px', displayType: 'flex', opacity: '.4', borderRadius: '100px' }}></input>
        </div>
        <div>
          <label style={{color: 'yellow'}} >Minimum Price ($)</label>
          <input ref={minPrice} placeholder="...Enter minimum price" type = "number" style={{width: '205px', displayType: 'flex', opacity: '.4', borderRadius: '100px' }}></input>
        </div>
        <div>
          <label style={{color: 'yellow'}} >Maximum Price ($)</label>
          <input ref={maxPrice} placeholder="...Enter minimum price" type = "number" style={{width: '205px', displayType: 'flex', opacity: '.4', borderRadius: '100px' }}></input>
        </div>
      </div>
      <div style={{ paddingBottom: '50px' }}>
        <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} size='lg' onClick={()=> {
          searchButtonHandler({
            state: state.current.value,
            city: city.current.value,
            eventArtistSearchTerm: eventArtistSearchTerm.current.value,
            minPrice: minPrice.current.value,
            maxPrice: maxPrice.current.value
          })
        }}>Search</Button>
      </div>
    </div>

  )
}

{/* <Input variant="filled" placeholder="...Event" style={{width: '205px', displayType: 'flex', opacity: '.6' }}/> */}

{/* <div style={{ paddingBottom: '50px' }}>
<Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} size='lg'>Search</Button>
</div> */}