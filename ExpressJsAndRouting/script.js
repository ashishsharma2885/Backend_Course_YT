const express = require('express')
const app = express()

// middleware use
app.use(function(res, res, next){
    console.log('middlware chala')
    next()
})

// Ek aur middleware aue use
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(function(res, res, next){
    console.log('middlware chala ek barr aur')
    next()
})
app.get("/", function(req,res){
    res.send("Champion meraa anuj")
})

 app.get("/profile", function(req, res, next){
  return next(new Error("something went wrong"));
 })

 app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
  

app.listen(3000)