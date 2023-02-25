const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const Schema = mongoose.Schema;

const studentModel = new Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    image :  {
        data : Buffer,
        type : String,
        required : false
    }
});

module.exports= mongoose.model("student",studentModel);