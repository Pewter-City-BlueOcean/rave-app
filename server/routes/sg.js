require("dotenv").config();
const express = require('express');
const axios = require('axios');
const router = express.Router();
const {getGroupOrCreateNewFunc} = require('../database/controllers/getGroupOrCreateNew.js');
const {getFullMembersTable} = require('../database/controllers/getGroupOrCreateNew.js');

let eventTypes = 'taxonomies.name=club_passes&taxonomies.name=music_festival&taxonomies.name=Concert&taxonomies.name=Concerts';

router.get('/events', (req, res) => {
  let argsConversion = {per_page: 50};

  if (req.query.state != '') {
    argsConversion['venue.state'] = req.query.state
  }
  if (req.query.city != '') {
    argsConversion['venue.city'] = req.query.city
  }
  if (req.query.eventArtistSearchTerm != '') {
    argsConversion['q'] = req.query.eventArtistSearchTerm
  }
  if (req.query.maxPrice != '') {
    argsConversion['average_price.lte'] = req.query.maxPrice
  }
  if (req.query.minPrice != '') {
    argsConversion['average_price.gt'] = req.query.minPrice
  }
  return axios({
    method:'get',
    url: `https://api.seatgeek.com/2/events?client_id=${process.env.SG_CLIENT_ID}&client_secret=${process.env.SG_CLIENT_SECRET}&${eventTypes}`,
    params: argsConversion
  })
  .then((val)=>{
    let slimmedResults = val.data.events.map((item)=> {return {
      group_id: item.id,
      event_title: item.title,
      datetime_local: item.datetime_utc,
      performers: item.performers.map((performer)=>{return {
        name: performer.name,
        image_url: performer.image,
        type: performer.type
      }}),
      city: item.venue.city,
      country: item.venue.country,
      state: item.venue.state,
      postal_code: item.venue.postal_code,
      address: item.venue.address,
      extended_address: item.venue.extended_address,
      location_latitude: item.venue.location.lat,
      location_longitude: item.venue.location.lon,
      average_price: item.stats.average_price,

    }})

    slimmedResults = slimmedResults.filter((item)=> {
      if (item.average_price === null) {
        return false;
      }
      if (req.query.eventArtistSearchTerm != '') {
        return item.event_title.toUpperCase().includes(req.query.eventArtistSearchTerm.toUpperCase()) || item.performers.some((item)=>{return item.name.toUpperCase().includes(req.query.eventArtistSearchTerm.toUpperCase())})
      } else {
        return true;
      }
    })

    let group_ids = slimmedResults.reduce((accumulator, item)=> {return [...accumulator, item.group_id]}, []);

    getFullMembersTable(group_ids)
    .then((val)=> {
      let membersTable = val.rows;
      for (let i = 0; i < slimmedResults.length; i ++) {
        let members = membersTable.reduce((accumulator, item)=> {
          return item.group_id === slimmedResults[i].group_id ? [...accumulator, item.individual_id] : accumulator;
        }, []);

        slimmedResults[i]['group_members'] = members;
      }
      res.send(slimmedResults)
    })
    .catch((err)=>{
      res.status(500).send();
    })

  })
  .catch((err)=>{res.status(500).send(err)})
})

router.post('/events', (req, res) => {

  getGroupOrCreateNewFunc(req.body.invididual_id, req.body.objEventData)
  .then((val)=> {res.send(val)})
  .catch((err)=>{res.status(500).send()});
})

module.exports = router;