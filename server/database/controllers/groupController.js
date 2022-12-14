const pool = require('../postgresDB.js');

const getGroups = (req, res) => {
  const groupsQuery = `SELECT *
  FROM groups g
  LEFT JOIN members m
  ON m.group_id=g.group_id
  WHERE m.individual_id='${req.query.user_id}'
  ORDER BY datetime_local ASC`;
  pool.query(groupsQuery)
  .then((result) => {
    res.status(200);
    res.send(result.rows);
  })
  .catch(e => {
    console.error(e.stack);
    res.status(404);
    res.send(e.stack);
  });
}

module.exports = {
  getGroups
}