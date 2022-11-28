import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Attendees = ({members}) => {
  console.log(members);
  return (
  <div className='column-flex'>
    <h4 className='concert-detail-title'>Group Members</h4>
    <ul className='member-list'>
      {
        members.map((m, index)=> (
          <li key={index}>{m.individual_id}</li>
        ))
      }
    </ul>
  </div>

  )
}

export default Attendees;