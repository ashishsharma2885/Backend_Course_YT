const express = require('express');
const app = express();

const userModel = require('./usermodel')

app.get('/', (req, res) => {
    res.send("hey");
})

 app.get('/create', async (req, res) => {
   let createduser = await userModel.create({
       name: "Ashish",
       email: "ashish@gmail.com",
       username: "Ashish"
  })
res.send(createduser)
 })

app.get('/update', async (req, res) => {
 let updateuser = await userModel.findOneAndUpdate({username: "Ashish"}, {name: "Ashish Sharma"}, {new: true})
 res.send(updateuser)
})

app.get("/read", async (req, res) => {
    let users = await userModel.findOne({username: "Ashish"});
    res.send(users)
})
 app.listen(3000)