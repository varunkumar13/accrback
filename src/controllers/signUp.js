const express = require('express');
const router = express.Router();
const userModel= require('../models/userModel');
const bcrypt = require('bcrypt')

router.post('/',async (req,res) =>{
    try {
        const {email , password}= req.body;
    const encryptPassword = await bcrypt.hash(password,10);
    await userModel.create({
        email : email,
        password :encryptPassword,

    })
    res.status(200).send("regesrered successful");

        
    } catch (error) {
      res.status(400).send(error);  
    }
    
});
module.exports=router;