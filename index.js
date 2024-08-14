const express = require("express");
const cors = require("cors");
const  urlRoute  = require("./routes/route");
const dbConnectionHandler = require("./config/dbConnection");
const path = require('path');
const urlModel = require("./models/urlModel");
const staticRoute = require('./routes/staticRoute')

dbConnectionHandler();
const app = express();

// for ejs template 
app.set('view engine','ejs');
app.set('views',path.resolve("./views"));



// ejs render
// app.get("/url/test",async(req,res)=>{

//     const allUrl = await urlModel.find({});
//     return res.render('home',{
//         urls:allUrl
//     });

// })


app.use(express.json()); // for json data 
app.use(express.urlencoded({extended:false})); // for form data 
app.use(cors());
app.use(express.static("views")); 



app.use('/',staticRoute);
app.use("/url", urlRoute);


app.listen(3000,()=>{console.log("App Is Running at PORT 3000!")})
