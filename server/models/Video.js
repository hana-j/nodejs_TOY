const Schema = require('mongoose');
const 
const mongoose = require('mongoose');


const videoSchema = mongoose.Schema({

    writer:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        maxlength:50
    },
    description :{
        type : String,

    },
    privacy: {
        type: Number,
    },
    filePath : {
        type: String,
    },
    catogory: String,
    views : {
        type: Number,
        default: 0 
    },
    duration :{
        type: String
    },
    thumbnail: {
        type: String
    }
}, { timestamps: true }) //12/3

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;