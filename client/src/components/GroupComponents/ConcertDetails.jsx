import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import Avatar from '@mui/material/Avatar';

// import {AccessTimeFilledIcon} from '@mui/icons-material';


const ConcertDetails = ({groupInfo}) => {

  console.log(groupInfo);
  return (
  <div className='column-flex'>
    <h2 className='concert-detail-title'>{groupInfo.event_title}</h2>
    <div>{moment(groupInfo.datetime_local).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
    {/* <p>{groupInfo.city}</p> */}
    <div className='column-flex'>
      {
        (groupInfo.performers) &&
        groupInfo.performers.map((p,index)=> (
          <div className='row-flex' key={index}>
            <Avatar src={p.image_url} />
            <p>{p.name}</p>
          </div>
          ))
      }
    </div>
  </div>

  )
}

export default ConcertDetails;