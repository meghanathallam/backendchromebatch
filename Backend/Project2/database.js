const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/passport-jwt")
.then((e)=>console.log("connected to mongoDB"))
.catch((e)=>console.log(e))

const userSchema = new mongoose.Schema({
    username :String,
    password:String
})

const userModel = mongoose.model('User',userSchema)

module.exports = userModel
