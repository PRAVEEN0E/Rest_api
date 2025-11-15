const express=require('express')
const app= express()
const router=require('./Router/router')
app.use(router)
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Home route → serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000,()=>{
    console.log("The server is Running: http://localhost:3000/")
})