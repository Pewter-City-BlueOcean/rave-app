const { pool } = require('../postgresDB.js');
var fs = require('fs/promises');
const path = require("path");

const updateIndividual = (req, res) => {

  const query = `

  `;
  //Write image to fileSystem
  const file = req.files.photo;
  // let fileExtension = req.files.photo.name.split('.')[1];
  const filename = req.body.username + path.extname(req.files.photo.name);
  const directory = path.join(__dirname, '../..', '/uploads/images/', filename);
    fs.open(directory, 'w+').then(() => {
      return fs.truncate(directory, 0).then(() => {
        return fs.writeFile(directory, file.data).catch(err => {
          console.log(err);
        });
      }).catch(err => {
        console.log(err);
      })
    })
  }

const getIndividual = (req, res) => {
  console.log(req);
}

module.exports = {
  updateIndividual,
  getIndividual
};