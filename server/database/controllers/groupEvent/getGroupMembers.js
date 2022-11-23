const {Group,Individual, Member} = require('../../models/index.js');

const getGroupMembers =async (req, res) => {
  const group_id = req.query.group_id;
  try {
    const membersIds = await Member.findAll({
      attributes:[],
      where : {
        group_id
      },
      include: [{
        model: Individual,
        as: 'individuals',
        attributes:['individual_id','spotify_username','photo']
      }]
    })
    res.send(membersIds.map(mem => mem.individuals));
  } catch {
    res.send(404);
  }
}

module.exports = getGroupMembers;
