const moogoose = require('mongoose');
const schema = moogoose.Schema;

const todoSchema = new schema({
  title : {
    type: String,
    require: true
  },
  completed : {
    type: Boolean
  }
});

module.exports = moogoose.model('todo',todoSchema);