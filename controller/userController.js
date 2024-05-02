let userService = require('../service/userService');
const config = require('../config/jwt');
const jwt = require('jsonwebtoken');

const registerUser = async function(req,res,next){

    let userName = req.body['userName'];
    let password = req.body['password'];
    try {
      
      let user = await userService.register(userName,password);
      let payload = { id: user._id };
      const token = jwt.sign(payload, config.TOKEN_SECRET);
      res.status(200).send({ token });

    } catch (error) {
      
      console.log(error);
      res.status(401).send({message:"Invalid user"});

    }

}