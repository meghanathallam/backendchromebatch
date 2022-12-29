const express = require('express')
const app = express()
const students = require('./students')

app.use(express.json())
app.get('/',(req,res)=>{
    res.json({message:'Api working properly'})
})
app.get('/api/students',(req,res)=>{
    res.json(students)
})
app.post('/api/students',(req,res)=>{
    if(!req.body.email){
        res.status(400)
        return res.json({error :" Email is required"})
    }
    const user = {
        id : students.length + 1,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
    }
    students.push(user)
    res.json(user)
})

app.put("/api/students/:id",(req,res)=>{
    let id = req.params.id
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let email = req.body.email    
    let index = students.findIndex((student)=>{
        return (student.id === Number.parseInt(id))
    })
    if(index >= 0){
        let std = students[index]
        std.first_name = first_name
        std.last_name = last_name
        std.email = email
        res.json(std)
    }
    else{
        res.status(404)
    }
})
app.delete('/api/students/:id',(req,res)=>{
    let id = req.params.id
    let index = students.findIndex((student)=>{
        return (student.id === Number.parseInt(id))
    })
    if(index>=0){
        let std = students[index]
        students.splice(index,1)
        res.json(std)
    }
})
app.listen(3000,()=>{
    console.log("Listening to port 3000")
})