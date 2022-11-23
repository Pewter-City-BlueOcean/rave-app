const groupsData = [
  {
    group_id: 1,
    event_title: 'EDC',
    datetime_local: '2022-11-24T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Austin',
    country: 'United States',
    state: 'TX',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 3,
    date_added_to_db: '2022-11-21T12:11:30',
    creator_id: '2'
  },
  {
    group_id: 2,
    event_title: 'BaddieRavez',
    datetime_local: '2022-11-22T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Dallas',
    country: 'United States',
    state: 'TX',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 2,
    date_added_to_db: '2022-11-21T12:11:30',
    creator_id: '1'
  },
  {
    group_id: 3,
    event_title: 'Underground Baddiez',
    datetime_local: '2022-11-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Dallas',
    country: 'United States',
    state: 'TX',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19T12:11:30',
    creator_id: '1'
  },
  {
    group_id: 4,
    event_title: 'Coachella',
    datetime_local: '2022-08-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Coachella',
    country: 'United States',
    state: 'CA',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19 12:11:30',
    creator_id: '4'
  },
  {
    group_id: 5,
    event_title: 'Underground Baddiez',
    datetime_local: '2022-11-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Dallas',
    country: 'United States',
    state: 'TX',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19 12:11:30',
    creator_id: '1'
  },
  {
    group_id: 6,
    event_title: 'Coachella',
    datetime_local: '2022-08-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Coachella',
    country: 'United States',
    state: 'CA',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19 12:11:30',
    creator_id: '4'
  },
  {
    group_id: 7,
    event_title: 'Underground Baddiez',
    datetime_local: '2022-11-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Dallas',
    country: 'United States',
    state: 'TX',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19T12:11:30',
    creator_id: '1'
  },
  {
    group_id: 8,
    event_title: 'Coachella',
    datetime_local: '2022-08-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Coachella',
    country: 'United States',
    state: 'CA',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19T12:11:30',
    creator_id: '4'
  },
  {
    group_id: 9,
    event_title: 'Underground Baddiez',
    datetime_local: '2022-11-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Dallas',
    country: 'United States',
    state: 'TX',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19T12:11:30',
    creator_id: '1'
  },
  {
    group_id: 10,
    event_title: 'Coachella',
    datetime_local: '2022-08-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Coachella',
    country: 'United States',
    state: 'CA',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19T12:11:30',
    creator_id: '4'
  },
  {
    group_id: 11,
    event_title: 'Underground Baddiez',
    datetime_local: '2022-11-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Dallas',
    country: 'United States',
    state: 'TX',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19T12:11:30',
    creator_id: '1'
  },
  {
    group_id: 12,
    event_title: 'Coachella',
    datetime_local: '2022-08-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Coachella',
    country: 'United States',
    state: 'CA',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19T12:11:30',
    creator_id: '4'
  },
  {
    group_id: 13,
    event_title: 'Coachella',
    datetime_local: '2022-08-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Coachella',
    country: 'United States',
    state: 'CA',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19T12:11:30',
    creator_id: '4'
  },
  {
    group_id: 14,
    event_title: 'Coachella',
    datetime_local: '2022-08-20T12:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Coachella',
    country: 'United States',
    state: 'CA',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 0,
    date_added_to_db: '2022-11-19T12:11:30',
    creator_id: '4'
  },
  {
    group_id: 15,
    event_title: 'The Baddest Raev',
    datetime_local: '2022-11-21T19:11:30',
    performers: [{
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },
    {
      image_url: "https://seatgeek.com/images/performers-landscape/roc-marciano-6f3695/79531/huge.jpg",
      name: "Roc Marciano",
      type: "band"
    },],
    city: 'Coachella',
    country: 'United States',
    state: 'CA',
    postal_code: '12345',
    location_latitude: 30.266666,
    location_longitude: -97.733330,
    notification: 1,
    date_added_to_db: '2022-11-19T12:11:30',
    creator_id: '4'
  },
];

export default groupsData;