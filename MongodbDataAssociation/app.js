const express = require('express')
const app = express()
const userModel = require("./models/user")
const postModel = require("./models/post")

app.get('/', function (req, res) {
    res.send("hey")
})

app.get('/create', async function (req, res) {
 let user = await userModel.create({
        username: "Ashish",
        age: 25,
        email:"ashish@gmail.com",
    })
    res.send(user)
})

app.get('/post/create', async function (req, res) {
   let post = await postModel.create({
        postdata: "hellow sare log kaise ho",
        user: "6631c71362b6bd93ef20b2a2"
    })

   let user = await userModel.findOne({_id: "6631c71362b6bd93ef20b2a2"})
   user.post.push(post._id)
  await user.save()
  res.send({post, user})
       })
app.listen(3000)