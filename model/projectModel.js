const mongoose = require("mongoose");
const Schema = mongoose.Schema
const projectSchema = new Schema(
    {
        projectName:{
            type : String,
            trim :true
        },
        projectdes:{
            type:String,
            trim:true
        },
        project_members:{
            //type:schema.Types.ObjectId,ref:'dep'
            type:Schema.Types.ObjectId,
            ref:'user',
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
    module.exports = mongoose.model('project',projectSchema)