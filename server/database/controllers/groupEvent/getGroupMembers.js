const {Group,Individual, Member} = require('../../models/index.js');

const getGroupMembers =async (req, res) => {
  const group_id = req.query.group_id;
  try {
    const membersIds = await Individual.findAll({
      include: [{
        model: Member,
        as:'members',
        where: {
          group_id
        },
        required: true
       }]
    })
    const members = membersIds.map((m)=> ({
      individual_id: m.individual_id,
      photo:m.photo
    }))
    res.send(members,200);

  } catch {
    res.sendStatus(404);
  }
}

module.exports = getGroupMembers;
