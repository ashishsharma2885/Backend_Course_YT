const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt'); 
const jwt = require('jwt');

app.use(cookieParser())


// Use cookie-parser middleware
// app.use(cookieParser());

// app.get('/', function(req, res) {
//     // Set a cookie named "name" with value "Ashish"
//     res.cookie("name", "Ashish");
//     res.send("done");
// });

app.get('/', function(req, res) {
   let token = jwt.sign({email: "ashishsharma@gmail.com"}, "secret")
   res.cookie("token", token)
   console.send("done")
})

app.get('/read', function(req, res) {
    console.log(req.cookies.token)
})

// here write bcrypt
// app.get('/', function(req, res) {
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("pololololo", salt, function(err, hash) {
//             console.log(hash);
//         });
//     });
// });


// app.get('/read', function(req, res) {
//     // Log cookies to console
//     console.log(req.cookies);
//     res.send("read page");
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
