const mongoose = require('mongoose')

let employeeSchema = new mongoose.Schema({
    fullName:{
        type:String,
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
    })

let Employee = mongoose.model('Employee',employeeSchema)
module.exports = Employee