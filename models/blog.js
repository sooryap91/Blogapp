const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BlogSchema = new Schema ({
    head :{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
        img:{
            data:Buffer,
            contentType :String
        }
    },
    body:{
        type:String,
        required:true
    },
     comments:{
         type:String,
     required:true
     }
    
})
let BlogDATA = mongoose.model('blog',BlogSchema)
module.exports = BlogDATA