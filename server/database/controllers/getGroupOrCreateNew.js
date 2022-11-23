const pool = require('../postgresDB.js');

const getGroupOrCreateNewFunc = (individual_id, objEventData) => {
  return pool.query('SELECT * FROM groups WHERE group_id = $1', [objEventData.group_id])
  .catch(()=>( 'DATABASE ERROR SELECTING'))
  .then((res)=> {
    if (res.rowCount === 0) {
      return pool.query('INSERT INTO groups (group_id,event_title,datetime_local,performers,city,country,state,address,extended_address,postal_code,location_latitude,location_longitude,created_by_individual_id,average_price) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING group_id', [objEventData.group_id, objEventData.event_title, objEventData.datetime_local,objEventData.performers,objEventData.city,objEventData.country,objEventData.state,objEventData.address,objEventData.extended_address,objEventData.postal_code,objEventData.location_latitude,objEventData.location_longitude,individual_id,objEventData.average_price])
      .then((val)=>{
        return pool.query('INSERT INTO members VALUES ($1, $2)', [individual_id, val.rows[0].group_id])
        .then(()=>{return 'CREATED NEW GROUP'})
        .catch(()=>{return 'CREATED NEW GROUP BUT FAILED TO ADD MEMBER TO IT'})
      })
      .catch((err)=>{
        return 'NEED GROUP NEEDED BUT ERROR CREATING';
      })
    } else {
      return pool.query('select * from members WHERE group_id=$1 AND individual_id=$2',[objEventData.group_id, individual_id])
      .then((val)=>{
        if (val.rowCount > 0) {
          return 'USER ALREADY BELONGS TO GROUP'
        } else {
          return pool.query('INSERT INTO members VALUES ($1, $2)', [individual_id, objEventData.group_id])
          .then(()=>('ADDED USER TO EXISTING GROUP'))
          .catch(()=>('GROUP EXISTS BUT FAILED TO ADD USER'))
        }
      })
      .catch((err)=>('GROUP EXISTS BUT FAILED TO QUERY MEMBERS TABLE'))
    }
  })
}

const getFullMembersTable = (groupsArray) => {
  return pool.query(`SELECT * FROM members WHERE group_id IN (${groupsArray.join(',')})`)
}

module.exports.getGroupOrCreateNewFunc = getGroupOrCreateNewFunc;
module.exports.getFullMembersTable = getFullMembersTable;
