const mongoose = require("mongoose");
const Schema = mongoose.Schema
const taskSchema = new Schema(
    {
        taskName:{
            type : String,
            trim :true
        },

        taskDescrip:{
            type : String,
            trime:true
        },
        task_status:{
            type:String,
            trime:true

        },
        task_duedate:{
            type: Date,
            

        },
        task_assignTo:{
            type:String

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
    {
        timestamps:true
    }
)
module.exports = mongoose.model('task',taskSchema)