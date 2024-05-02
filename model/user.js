const moogoose = require('mongoose');
const schema = moogoose.Schema;

const userSchema = new schema({
    username : {
      type: 'String',
      require: true,
      trim: true,
      unique: true
    },
    password: {
      type: 'String',
      required: true,
      trim: true
    }
});
module.exports = moogoose.model('user',userSchema);

