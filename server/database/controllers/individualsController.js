const { pool } = require('../postgresDB.js');
var fs = require('fs/promises');
const path = require("path");

const updateIndividual = (req, res) => {
  const query = `

  `;
  //Write image to fileSystem
  const file = req.files.photo;
  // let fileExtension = req.files.photo.name.split('.')[1];
  file.name = req.body.username + path.extname(req.files.photo.name);
  fs.truncate(path.join(__dirname, '../..', '/uploads/images/', file.name), 0).then (() => {
    return fs.writeFile(path.join(__dirname, '../..', '/uploads/images/', file.name), file.data).catch(err => {
      console.log(err);
    })
  }).catch(err => {
    console.log(err);
  })
}

module.exports = {
  updateIndividual
};