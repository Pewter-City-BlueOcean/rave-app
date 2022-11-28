const {Individual} = require('../../models/index.js');

const getAllMembers =async (req, res) => {

  try {
    const individuas = await Individual.findAll({})
    res.send(individuas)
  } catch {
    res.send(404);
  }
}

module.exports = getAllMembers;
