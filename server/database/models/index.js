const Group = require('./Group.js');
const Individual = require('./Individual.js');
const Member = require('./Member.js');
const Message = require('./Message.js');

Group.hasMany(Member,{as:'members', foreignKey:'group_id', targetKey:'group_id'});
Group.hasMany(Message,{as:'messages', foreignKey:'group_id', targetKey:'group_id'});

Individual.hasMany(Member,{as:'members', foreignKey:'individual_id', targetKey:'individual_id'});
Individual.hasMany(Message,{as:'messages', foreignKey:'individual_id', targetKey:'individual_id'});

Member.belongsTo(Individual,{as:'individuals', foreignKey:'individual_id', targetKey:'individual_id'});

Member.belongsTo(Group,{as:'groups', foreignKey:'group_id', targetKey:'group_id'});

module.exports = {
  Group,
  Individual,
  Member,
  Message
}