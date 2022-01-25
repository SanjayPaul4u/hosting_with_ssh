console.log("This express tuitorial. and this is all from tuitorial70, 71 and 72");
const fs = require('fs');
const express =require("express");
const path= require('path');
const app = express();
const port = 80; 

//EXPRESS SPECIFIC STUFF        
app.use("/static", express.static("static")); //for serving static file
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');//set the template engine AND pug 
app.set ('views', path.join(__dirname,'views')); //set the views directory
           
//END POINT
app.get('/',(req, res)=>{
  
    const cont ='This is the best content by harry sir so use it so far wisely';
    const params= {'title':"pubG is worst game", 'content':cont};
  res.status(200).render('index.pug', params);//HERE WE HAVE TO CREATE INDEX.PUG IN VIEWS FILE 
});

app.post('/',(req, res)=>{
  nam=req.body.nam//in form we should give name like id, class okay
  ageee=req.body.age
  gender=req.body.gender
  address=req.body.address
  more=req.body.more
  const outPutWrite=`name of client is ${nam}, age of client is ${ageee}, gender of client is ${gender}, address of client is ${address}, more about of  client is ${more}`
fs.writeFileSync('output.txt', outPutWrite);
  console.log(req.body);
  const params= {'message':"Your from has been submitted successfully"};
  res.status(200).render('index.pug', params);
});
 
//START THE SERVER
app.listen(port, ()=>{
    console.log(`This express app succcessfully run port ${port}`);//this "${port}" is very nessesery for gave if you not set this then your function not will be run.
});




//---------------------------------------------------------------------
//TUITORIAL 72
//---------------------------------------------------------------------------
// console.log("This express tuitorial. and this is all from tuitorial70, 71 and 72");

// const express =require("express");
// const path= require('path');//this is from 72
// const app = express();
// const port = 80; 

//          //for serving static file
// app.use("/static", express.static("static"));//This is from tuitorial 72


// //for serving pug
// //set the template engine ad pug 
// app.set('view engine', 'pug');//This is from tuitorial 72
//          //set the views directory
// app.set ('views', path.join(__dirname,'views'));//This is from tuitorial 72
//            //out pug demo end point 


//           //this is all from 72
// app.get("/demo", (req, res)=>{
//         res.status(200).render('demo',{title:"This is title in demo.pug", message:"This message in demo.pug"})
// }); 



//this is all from 71
// app.get("/", (req, res)=>{
//         res.send("Today we are making first express app with Harry sir");
// });  
// app.get("/about", (req, res)=>{//we are using get not post
        
//         res.send("This get request. This is about page. Today we are making first express app with Harry sir");
// });
// app.post("/about", (req, res)=>{//This is post request
//         res.status(200).send("This is post request .This is about page. ");
// });
// app.get("/this", (req, res)=>{//This is get request
//         res.status(404).send("404 is not found");//400 is bad request
// });



// app.listen(port, ()=>{
//     console.log(`This express app succcessfully run port ${port}`);//this "${port}" is very nessesery for gave if you not set this then your function not will be run.
// });









//--------------------------------------------------------------------
//71 tuitorial
//-----------------------------------------------------------------
// console.log("This is practice express app tuitorial.");

// const express = require('express');
// const app =express();



// const port =80;
// app.get("/",(req, res)=>{
//         res.send("This is get reqest----Hi every one.")
// });
// app.get("/about",(req, res)=>{
//         res.send("This is get reqest----This is about section by get request")
// });
// app.post("/",(req, res)=>{
//         res.send("This is post reqest----Hi every one, good morning.")
// });
// app.post("/about",(req, res)=>{
//         res.send("This is post reqest----This is about section by post request")
// });
// app.copy("/",(req, res)=>{
//         res.send("This is from copy reqest")
// });




// app.listen(port, ()=>{
//     console.log(`The server started at ${port}`);
// });

