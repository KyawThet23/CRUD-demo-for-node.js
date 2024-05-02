const bcryt = require('bcrypt');
const user = require('../model/user');

const register = async (name,pass) => {
  const salt = await bcryt.genSalt(10);
  const hashPass = await bcryt.hash(pass,salt);
  let User = new user({
    username : name,
    password : hashPass
  });
  return User.save();
}

module.exports = {
  register
}