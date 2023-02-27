const express = require('express');
const router = express.Router();
const model= require('../models/studentModel');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.post('/' ,async (req , res)=> {
    try {
        const {email,password} = req.body;
        const user =await userModel.findOne({email});
        if(user && (await bcrypt.compare(password,user.password))){
        const token = jwt.sign({
           email :email, 
        },process.env.TOKEN_KEY,
        {
            expiresIn:'36h'
        });
        res.status(200),json({
            email : user.email,
            access_token : token
        })
        }
        return res.status(201).send("account not cereated"); 
    } catch (error) {
     res.status(400).send(error);   
    }

});
module.exports=router;