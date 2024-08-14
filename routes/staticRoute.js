const express = require("express");
const URL = require('../models/urlModel')



const router = express.Router();
router.get("/",async(req,res)=>{

    const allUrl = await URL.find({});
    return res.render('home',{
        urls:allUrl
    });

})

module.exports = router;