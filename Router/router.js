
const express = require('express')
const router = express.Router()
router.use(express.json())
const mysql= require("mysql2")
const cors =require('cors')
router.use(cors())
const db = mysql.createConnection({
  host: 'bx9jt5cmfyhe3jue3ddo-mysql.services.clever-cloud.com',     
  user: 'ua0astrjea8ld9rt',         
  password: 'O7tI1Urib2vD233Vp0BQ',          
  database: 'bx9jt5cmfyhe3jue3ddo'    ,
  port: '3306'  
});
db.connect(err=>{if(err){console.log("Error",err)}else{console.log("Connected")}})

router.get('/product', (req, res) => {
   const category=req.query.category;
   const price_less=req.query.lp
   if(category){
  db.query("select * from products where category =?",[category],(err,result)=>{
    if (err) {
      console.error('Insert Error:', err.message);
      return res.status(500).json({ error: 'DB Deletion  falied' });
    }
     res.json({ data:{product:result}  })
  })}
  else if(price_less){
   db.query("select * from products where price <=?",[price_less],(err,result)=>{
      if (err) {
      console.error('Insert Error:', err.message);
      return res.status(500).json({ error: 'DB Deletion  falied' });
    }
     res.json({ data:{product:result}  })
   })
  }
  else{
  db.query("select * from products" ,(err, result)=>{
    if(err){
      res.json({
        error:"error",err
      })
    }
    else{
          res.json({ data:{product:result}  })
    }
  })
}
  
})
router.get('/product/:id', (req, res) => {
  const id =parseInt(req.params.id)
  db.query("select * from products where id=?",[id],(err,result)=>{
    if(err){
      res.json({
        error:"error",err
      })
    }
    res.json({ data:{product:result}  })
  })
  
  
})
router.post('/product', (req, res) => {

  
  // expect body: { category, name, price }
  const { category, name, price } = req.body

  db.query("insert into products(category,name,price) values(?,?,?)",[category,name,price],(err,result)=>{
    if (err) {
      console.error('Insert Error:', err.message);
      return res.status(500).json({ error: 'DB Insert Failed' });
    }
           res.json({message:"New product Added" ,data:{product:{id:result.insertId,
            name: name,
            category: category,
            price: price
           }}  })
  })
  
 
  
  
})
router.put('/product/:id', (req, res) => {
  const id =parseInt(req.params.id)
 
  const{name,price,category}=req.body
db.query("update products SET name=? , price=?, category=? where id=?",[name,price,category,id],(err,result)=>{
  if (err) {
      console.error('Insert Error:', err.message);
      return res.status(500).json({ error: 'DB Updation falied' });
    }
    res.json({ data:{product:result}  })
})
  
  
})
router.delete('/product/:id', (req, res) => {
  const id =parseInt(req.params.id)
  db.query("delete from products where id=?",[id],(err,result)=>{
    if (err) {
      console.error('Insert Error:', err.message);
      return res.status(500).json({ error: 'DB Deletion  falied' });
    }
    res.json({
    message:"Product Removed",
    Removed:result
  })
  })
  
})
module.exports = router
