const pool = require('../postgresDB.js');

/**
 *
 * @param {*} group_id = id of group to retrieve members from
 * @returns rows of members
 */
const getGroupMembers = (req, res) => {
  const group_id = req.params.group_id;
  // Need to return * from individuals WHERE
  pool.query(`SELECT * FROM individuals INNER JOIN members ON individuals.individual_id = members.individual_id WHERE members.group_id='${group_id}'`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Internal Server Error: Trouble retrieving group\'s members');
    })
}


module.exports = {
  getGroupMembers,
};