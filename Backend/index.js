const express=require('express')
const cors=require('cors')
require('./db/config')
const User=require('./db/User')
const app=express()
app.use(express.json())
app.use(cors())

app.post("/register",async(req,res)=>{
    try{
        const newUser=new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })

        const saveUser=await newUser.save()
        res.json(saveUser)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

app.listen(8080)