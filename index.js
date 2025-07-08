const express=require('express')
const app= express()
const router=require('./Router/router')
app.use(router)
app.listen(3000,()=>{
    console.log("The server is Running: http://localhost:3000/")
})