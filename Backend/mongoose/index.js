const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("connected to MongoDB Successfully")
}).catch((err)=>{console.log(err)})
const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
  
})

const Student = new mongoose.model("Student",student)

const chrome = async()=>{
    // const yashvinder = await Student.create(
    //     {
    //     name:"adgfar",
    //     workout : false,
    //     height: 6
    // })
    // console.log(yashvinder)
   
}
const Bharat = async ()=>{
    const sandeep = await Student.findOne()
    console.log(sandeep)
}
chrome()
Bharat()
