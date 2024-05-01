// Fundamnetals of javascript
// arrays and objects
// funcions return
// async js coding

/* 1 array
var arr = [1,2,3,4];
// foreach map filter find indexof
arr.forEach(function(val){
    console.log(val + " hello");
})
*/

/*Map 
var arr = [1,2,3,4];
var newarr = arr.map(function(val){
    return val*3;
})
console.log(newarr)
*/

/* filter
var arr = [1,2,3,4];
var ans = arr.filter(function(val){
    if(val >= 3) {return true;}
    else return false;
})
console.log(ans)
*/

/* find
var arr = [1,2,3,4];
var ans = arr.find(function(val){
   if(val === 2) return val;
})
console.log(ans)
*/

/* Topic- backend
var obj = {
    name: "Ashish",
    age: 12
}
obj.age = 25
*/

/* Topic- functions
function abcd(){
    return 12;
}

var ans = abcd();
*/


// Node.js Basics
// introduction to Node.js
// Installing Node.js and npm.
// Working and modules.
// File system operations.
// understanding HTTP module

/* Topic- Nodejs- programming language nhi hai javascript runtime environment javascript 
 se backend nhi bn skta hai kyuki js ke pass wo funcionalities nahi hai jisne backend banta
 hai ryan dahl isne socha js se backend bannna chahiye 
 google chrome ka v8 rngine ka code open source hai and ryan dahl us code mein chhedkhaani kar rha hai
 fir usne socha hme js me code karna hai
 kyuki chorme ka v8 engine bana hai c++ mein
 fir usne socha ki humein to js mein code karna hai
 hm js ka code likhenge jo ki wrapper layer of js recive karegi and wo code v8 engine ke c++
 modules ke server create karega
 nodejs is javascript run time environment 
 
 Topic- Installing Node.js and npm- hme wh code leker anna padega jo hamre laptop ko code
 Topic- Npm aisa smjho app story playstore iska code khi se leke skte ho  npm ek aisa jagah hai alag alag log apna 
 app apne code ko upload kr skte aur alag lag log use kar skte hai kisi ka likha hua code app use kr rhe ho usi ko 
 npm kthe hai
 npm init -> package.json -> lekha jokha of the package.json of he project

 Topic - http and https 
 protocal - rules internet pr kuch bhi krne ke liye rule banaye gaye hai unke dwara jinhone internet 
 banaya hai gaye hai unke dwaara jinhone internet bannaya hai, ab un rules ko fallow karna jaruri hai,
 aur ye rules follow ho isliye ye rules app ke operating system ko software main pre installed aate hai

 http - protocal yahi protocal hai rule hai jisko follow kare bina aap internet pe na hi kuch bhej sakte ho,
 naa hi kuch bhej sakte ho, naa hi kuch manga sakte ho
*/

// NPM understanding
// installing and unistalling anything basics & advanced
// understanding node_modules
// dependencies
// devdependencies
// script - understanding default scripts PATH and custom scripts 

/* NPM understanding
npm - node package manager npm ke alag alag code bases jisko tecnical pakage milte hai
install -> npm i packagekaNaam
unistall -> npm uninstall packageNaam
installing particular versions
dependencies -> package and packages ki dependent hai
devdependencies -> aise packages jo sirf development me kaam aayege par jab app ban jayega aur upload ho jayega tab
hum in packages ko use nahi kar rhe honge
*/


// Express.js Framework
// Introduction to Express.Js
// Setting up a basic Express application
// Routing
// Middleware
// Request and response handling
// Error handling

/*Introduction to Express.Js -> Express js ek npm package hai yh ek framework hai 
framework -> issi flow me kaam karna hoga 
manages everything from receiving the request and giving the response 
 Routing -> Ashis.com facebook.com/  twitter.com/  youtube.com/ Ashish.com/Profile domain
 ko chor do aur iss routes ko utha lo
Middleware -> Routes ke phle lgta hai middleware facebook se phle jayegi request middleware ke pass middleware
ke pass chahe toh kuch kaam kr skte hai hm chah ekoi bhi request aye toh print ho hello phir routes ke pass jaye
hm chahe kisi bhi kaam routes ke phle aaye usko hm khate hai middleware.
jab bhi server request accept karta hai waha se routes ke beech pahuchne tak agar app us request ko bich me 
rokteho and kuch perform karte ho, to yh element middleware kahete hai
*/


/* from handling and working with the forms
// handle backend process of froms and making sure the data coming from any frontend libery, fw, templating
engines, we still handle it at the backend.
Topic -> session cookie- hm log koi bhi data frontend par browser par rakh skte hai and jb bhi app kuch bhi request 
backend par karoge wo fe par saved data automatically backend par chala jayega
tumne toh bheja tha plain text par server ko mila blob which is not directly readable ab is cheej ko hanld karne padega 
ki hum us blob ko wapas se readable kar sake
*/


// initialize a project with npm
// express install
// dynamic routing
// dynamic routing
// how to get data coming from frontend at  backend route
// setting up parser for form
// setting up ejs for rjs pages
// setting up public.static.files

/* Topic-> EJS- ejs kya hai jo hamara frontend dikhega ejs ekdm html jaisa dikhta hai lekin usme perform kra skte ho
setting up middleware for view engine
*/ 

/* Topic -> setting up public.static.files */

/* Topic -> dynamic routing dyanmic routing
 hum log kai baar kuch routes dekhte hai unmein sirf ek hi hissa change hota 
/author/Ashish
/author/sharma
/author/pooja
sbse phle browser pr jao url likhiye apna jo aapko chahiye and enter dabaaiye
ab us url route ko create kariye
res bhejiye kuchh bhi
ab usi url ko agar dynamic banana hai toh realise karo konsa part dynamic hai aur us part keaage route me ; lga do

req.params -> ka matlab colon hai
*/


// Data Storage:
// Types of DBS
// what and why
// terminologies - collection, documents, schemas, keys, models

/* Topic -> Data Storage -> aisa kuch jaha par hm saara users ki info store kar skte hai 
 Database
 Topic -> Types of dbs - SQL ! NoSQL
 SQL - data ko ek roop me rakhna - tables
 NoSQL -> Object through how object works wha data object ke through data rkha jayega
 Topic -> what and why ->
 Database -> collection  -> Document
 
 Code                     Database
  ________________________________________

 mongoose.connect -> database create
 model create  -> collection
 CREATE code     -> document
*/ 


/* Authentication and Authorization
profile dene se pahle check karna hota hai user hai kaun - isko khte hai authentications

authorized toperform some tasks which are only allowed to be executed admin

server har baar bhul jata hai kaun ho ab kyuki server bhool jaata hai app kaun ho to har baar wo har kaam ke 
liye aapse puchhega app kaun ho

sbse phle hme do chize sikhni hai alag alag 
i) cookie kaise se karta hai
ii) bcrypt kaise use karte hai for password encrytption and decryption
iii) jwt kya hai and jwt mein data kaise store karein and baahar nikaalein

JWT -> 3 hiso se banta hai
*/


/* Mini Major -> Project
  users post likh paayega
  login register
  logout
  post creation
  post like
  post delete
*/