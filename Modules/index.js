/*const fs = require('fs');

fs.appendFile('hey.txt', "hey hello kaise ho main toh accha hu", function(err){
    if(err)console.error(err);
    else console.log("done")
})
*/

const http = require('http');
const server = http.createServer(function(req, res){
   res.end("hellow world")
})
server.listen(3000);