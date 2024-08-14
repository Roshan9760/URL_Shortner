const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({

    shortId:{
        type:String,
        require:true,
        unique:true
    },
    redirectURL:{
        type:String,
        require:true,
        unique:true
    },
    visitHistory:[{
        timestamp:{
            type:Number
        }
    }]
},{timestamps:true});

module.exports = mongoose.model('URL',urlSchema);