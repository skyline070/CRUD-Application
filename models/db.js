const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sumit:6789012345@cluster0.agwu2.mongodb.net/Empapp?retryWrites=true&w=majority',{useUnifiedTopology:true},(err)=>{
    if(!err) console.log("Mongodb Connected Successfully")
    else
    console.log("Problem Occur"+err)
})