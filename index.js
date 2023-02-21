const express = require('express');

const app = express();
//app.listen()

app.get('/' , (req,res)=> {
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log("listening to 300")
})



/* const fs = require('fs');
const path=require('path');

const a =require('./demo')
console.log(a); */

//const writeFile=path.join(process.cwd(),'text.txt');
//fs.writeFileSync(writeFile,'hey this is my project');
//const a =fs.readFileSync(writeFile)
//console.log(a.toString());