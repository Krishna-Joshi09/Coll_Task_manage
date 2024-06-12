const mongoose = require("mongoose");
const Schema = mongoose.Schema
const userSchema = new Schema(
    {
        userName:{
            type : String,
            trim :true
        },
        user_email:{
            type:String,
            trim:true
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        updatedAt:{
            type:Date,
            default:Date.now
        }
    },
    )
    module.exports = mongoose.model('user',userSchema)