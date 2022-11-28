const {Member} = require('../../models/index.js');

const postMembertoGroup =async (req, res) => {
  try {
    await Member.create(req.body)
    res.send(200)
  } catch {
    res.send(404);
  }
}


module.exports = postMembertoGroup;
