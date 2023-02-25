const express = require('express');
const router = express.Router();
const model= require('../modules/studentModel');
const {uploads} = require('../midddleware/multer');

router.post('/', uploads.single('image'),async (req ,res) => {
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

    if(!req.file){
        return res.status(201).send('file is already saved')
    }
        const addData =new model({
            name :name,
            email:email,
            image : req.file.path

        })
        console.log(req.file);
        const data = await addData.save();
        res.send(data);
    }catch (error){
        res.send(error);
    }
    
})
module.exports =router ;
