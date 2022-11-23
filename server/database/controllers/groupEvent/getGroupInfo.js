const {Group} = require('../../models/index.js');

const getGroupInfo =async (req, res) => {
  const groupId = Number(req.query.group_id);
  try {
    const groupInfo = await Group.findAll({
      where: {
        group_id: groupId
      }
    })
    res.send(groupInfo)
  } catch {
    res.send(404);
  }
}


module.exports = getGroupInfo;
