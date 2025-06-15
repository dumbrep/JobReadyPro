
const mongoose = require("mongoose")


const LogInSchema = new mongoose.Schema(
    {
        name :{
            type: String,
            required : true
        },
        email : {
            type :  String,
            required : true
        },
        password : {
            type:String,
            required : true
        }
    }
)

const model =  mongoose.model("user" , LogInSchema)

module.exports= model;