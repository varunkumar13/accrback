const express = require('express');
const router = express.Router();
const model= require('../models/studentModel');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

router.post('/' ,async (req , res)=> {
const {email,password} = req.body;
const user =await userModel.findOne({email});
if(user && (await bcrypt.compare(password,user.password))){

}
return res.status(201).send("account cereated");
})