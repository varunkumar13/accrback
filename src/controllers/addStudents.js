const express = require('express');
const router = express.Router();
const model= require('../modules/studentModel');

router.post('/',async (req ,res) => {
    try{
        const { name,email}=req.body;

        if(!name|| name==""){
            return res.send('name is mandatory parameter');
        }

        if(!email|| email==""){
            return res.send('email is mandatory parameter');
        }

        const OldEmail = await model.findOne({email});
        if(OldEmail){
            return res.send("email is already existt");
        }

        const addData =new model({
            name :name,
            email:email,

        })
        const data = await addData.save();
        res.send(data);
    }catch (error){
        res.send(error);
    }
    
})
module.exports =router ;
