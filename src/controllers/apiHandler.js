const express = require('express');
const router = express.Router();
const apiHandler= require('./addStudents');
router.use ('./add_student ',apiHandler);
module.exports=router;