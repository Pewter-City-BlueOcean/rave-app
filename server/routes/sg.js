require("dotenv").config();
const express = require('express');
const axios = require('axios');
const router = express.Router();
const getGroupOrCreateNewFunc = require('../database/controllers/getGroupOrCreateNew.js');

let eventTypes = 'taxonomies.name=club_passes&taxonomies.name=music_festival&taxonomies.name=Concert&taxonomies.name=Concerts';

router.get('/events', (req, res) => {
  //{state, city, eventArtistSearchTerm, minPrice, maxPrice, IP_address}
  let argsConversion = {per_page: 50};
  if (req.query.IP_address != undefined) {
      argsConversion['geoip'] = req.query.IP_address
  } else {
    if (req.query.state != undefined) {
      argsConversion['venue.state'] = req.query.state
    }
    if (req.query.city != undefined) {
      argsConversion['venue.city'] = req.query.city
    }
  }
  if (req.query.eventArtistSearchTerm != undefined) {
    argsConversion['q'] = req.query.eventArtistSearchTerm
  }
  if (req.query.maxPrice != undefined) {
    argsConversion['highest_price.lte'] = req.query.maxPrice
  }
  if (req.query.minPrice != undefined) {
    argsConversion['lowest_price.gt'] = req.query.minPrice
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
      location_latitude: item.venue.location.lat,
      location_longitude: item.venue.location.lon,
      average_price: item.stats.average_price
    }})
    if (req.query.eventArtistSearchTerm != undefined) {
      slimmedResults = slimmedResults.filter((item)=> {
        return item.event_title.toUpperCase().includes(req.query.eventArtistSearchTerm.toUpperCase()) || item.performer.some((item)=>{return item.name.toUpperCase().includes(req.query.eventArtistSearchTerm.toUpperCase())})
      })
    }
    res.send(slimmedResults)
  })
  .catch((err)=>{res.status(500).send(err)})
})

router.post('/events', (req, res) => {
  getGroupOrCreateNewFunc(req.params.individual_id, req.params.objEventData)
  .then((val)=> {res.send(val)})
  .catch((err)=>{res.status(500).send()});
})

// seatGeekSearch({state:'TX', city:'Houston', minPrice: 150, IP_address: '192.168.0.173'})
// .then((val)=>{console.log(val)})

module.exports = router;