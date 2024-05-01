const express = require('express');
const app = express();
const path = require('path'); // Import the path module

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
   res.render("index");
});

app.get("/profile/:username", function(req, res) {
    res.send(`welcome, ${req.params.username}`);
 });

 app.get("/author/:username/:age", function(req, res) {
    res.send(`welcome, ${req.params.username} of age ${req.params.age}`);
 });


app.listen(3000, function() {
    console.log("It's running");
})
