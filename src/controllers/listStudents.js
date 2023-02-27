const express = require('express');
const router = express.Router();
const model= require('../models/studentModel');

router.get('/',async (req,res)=> {
    try {
        const data = await model.find();
        res.status(200).send(data);
    }catch (error){
        res.send(error);
    }
})
module.exports =router;