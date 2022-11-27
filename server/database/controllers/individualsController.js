const pool = require('../postgresDB.js');
var fs = require('fs/promises');
const path = require("path");

const updateIndividual = (req, res) => {

  //Write image to fileSystem
  if(req.files) {
    const file = req.files.photo;
    // let fileExtension = req.files.photo.name.split('.')[1];
    const filename = req.body.individual_id + path.extname(req.files.photo.name);
    const directory = path.join(__dirname, '../../..', 'client/dist/uploads/images/', filename);
    fs.open(directory, 'w+').then(() => {
      return fs.truncate(directory, 0).then(() => {
        return fs.writeFile(directory, file.data).catch(err => {
          console.log(err);
        });
      }).catch(err => {
        console.log(err);
      })
    })
    const params = [req.body.individual_id, req.body.location, req.body.motto, req.body.bio, `uploads/images/${filename}`, req.body.age, req.body.username];
    const query = `
      UPDATE individuals
      SET individual_id = $1,
          location = $2,
          motto = $3,
          bio = $4,
          photo = $5,
          age = $6,
          username = $7
      WHERE individual_id = $1
      RETURNING *;
    `;
    return pool.query(query, params).then(results => {
      res.send(results.rows);
  })
  } else {
    const params = [req.body.individual_id, req.body.location, req.body.motto, req.body.bio, req.body.age, req.body.username];
    const query = `
    UPDATE individuals
    SET individual_id = $1,
    location = $2,
    motto = $3,
    bio = $4,
    age = $5,
    username = $6
    WHERE individual_id = $1
    RETURNING *;
    `;
    return pool.query(query, params).then(results => {
      res.send(results.rows);
  })
  }
  }

const getIndividual = (req, res) => {
  const query = `
  SELECT * FROM individuals WHERE individual_id = $1;
`
const params = [req.query.individual_id];
return pool.query(query, params).then((results) => {
  res.send(results.rows);
}).catch(err => {
  console.log(err);
})
}


const setNewUser = (req, res) => {
  const spotifyUserId = req.query.username;
  const email = req.query.email;
  console.log('spotifyUserId', spotifyUserId);
  const insertQuery = `INSERT INTO individuals (individual_id, email) VALUES ($1, $2);`
  const params = [spotifyUserId, email];
  return pool.query(insertQuery, params).then(() => {
  }).catch(err => {
  })
}

const setPlaylist = (req, res) => {
  const params = [req.body.individual_id, req.body.playlist_id];
    const query = `
      UPDATE individuals
      SET playlist = $2
      WHERE individual_id = $1
      RETURNING *;
    `;

  return pool.query(query, params)
    .then(results => {
      res.send(results.rows);
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  updateIndividual,
  getIndividual,
  setNewUser,
  setPlaylist
};