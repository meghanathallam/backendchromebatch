const express = require('express')
const app = express()
var studentArray = require('./InitialData')
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
var currentId = studentArray.length


app.get('/api/student/:id',(req,res)=>{
    let id = req.params.id
    if(!isNaN(id)){
        id = parseInt(id)
        let studentObject = studentArray.find((e)=>{
            return (e.id === id)
        })
        if(studentObject === undefined || studentObject === {}){
            return res.sendStatus(404)
        }
        else {
            return res.json(studentObject)
        }
    }
    else {
        return res.sendStatus(400)
    }
})
app.get('/api/student',(req,res)=>{
    res.json(studentArray)
})
app.post('/api/student',(req,res)=>{
    let reqKeys = Object.keys(req.body)
    if(reqKeys.find((e)=> {return e === 'name'}) && reqKeys.find((e)=> {return e === 'currentClass'}) &&  reqKeys.find((e)=> {return e === 'division'})){
        if(!isNaN(req.body.currentClass)){
            let name = req.body.name;
            let currentClass = req.body.currentClass;
            let division = req.body.division;
            currentId++
            studentArray.push({id:currentId,name:name,currentClass:parseInt(currentClass),division:division})
            return res.json({id:currentId})
        }
        else{
            return res.sendStatus(400)
        }
    }
    else{
        return res.sendStatus(400)
    }
})
app.put('/api/student/:id',(req,res)=>{
    if(!isNaN(req.params.id)){
        let id = parseInt(req.params.id)
        let studentObjectOld = studentArray.find((e)=>{
            return (e.id === id)
        })
        if (studentObjectOld === undefined){
            return res.sendStatus(400)
        }
        else {
            let updateObject = req.body;
            if(Object.keys(updateObject).find((e)=>{
                return e === 'currentClass'
            })){
              if(!isNaN(updateObject.currentClass)){
                updateObject.currentClass = parseInt(updateObject.currentClass)
              }  
              else{
                return res.sendStatus(400)
              }
            }
            let studentObjectNew = {...studentObjectOld, ...updateObject}
            let index = studentArray.indexOf(studentObjectOld);
            studentArray.splice(index,1)
            studentArray.push(studentObjectNew)
            res.sendStatus(200)


        }
    }
    else {
        return res.sendStatus(400)
    }
})
app.delete('/api/student/:id',(req,res)=>{
    let id = req.params.id
    if(!isNaN(id)){
        id = parseInt(id)
        let studentObject = studentArray.find((e)=>{
            return e.id ===id
        })
        if(studentObject !== undefined){
            let index = studentArray.indexOf(studentObject);
            studentArray.splice(index,1)
            return res.sendStatus(200)
        }
        else {
            return res.sendStatus(404)
        }
    }
    else {
        return res.sendStatus(400)
    }
})
app.use('*',(req,res)=>{
    res.sendStatus(404)
})
app.listen(3000)