const express = require('express');

const app = express();
//app.listen()

app.get('/' , (req,res)=> {
    res.send('Hello World');
})
app.get('/about_us', (req,res) => {
    res.send("about us page")
})

app.post('/add', (req,res) => {
    res.send("post request")
})


app.listen(3000, () => {
    console.log("listening rt")
})




/* const fs = require('fs');
const path=require('path');

const a =require('./demo')
console.log(a); */

//const writeFile=path.join(process.cwd(),'text.txt');
//fs.writeFileSync(writeFile,'hey this is my project');
//const a =fs.readFileSync(writeFile)
//console.log(a.toString());