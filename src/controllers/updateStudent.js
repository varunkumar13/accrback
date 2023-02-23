const express = require('express');
const router = express.Router();
const model= require('../modules/studentModel');
router.put('/:id',async (req,res)=>{
    try{

   
   const {name,email}= req.body;
   const id = req.params.id; 
   const updateData ={
    name :name,
    email:email
   }
   await model.findByIdAndUpdate(id,updateData);
   res.status(200).send('Success');
}catch(error){
  res.status(400).send(error);      
}
});
module.exports =router;