// router.js
const express = require('express')
const router = express.Router()
router.use(express.json())
const product = [
  { id: 1, name: "Shoe", price: 500, category: "Footwear" },
  { id: 2, name: "T-shirt", price: 300, category: "Apparel" },
  { id: 3, name: "Backpack", price: 1200, category: "Accessories" },
  { id: 4, name: "Laptop", price: 45000, category: "Electronics" },
  { id: 5, name: "Water Bottle", price: 150, category: "Home Essentials" },
  { id: 6, name: "Smartphone", price: 25000, category: "Electronics" },
  { id: 7, name: "Notebook", price: 50, category: "Stationery" },
  { id: 8, name: "Pen", price: 10, category: "Stationery" },
  { id: 9, name: "Mouse", price: 600, category: "Electronics" },
  { id: 10, name: "Keyboard", price: 800, category: "Electronics" },
  { id: 11, name: "Desk Lamp", price: 1200, category: "Home Essentials" },
  { id: 12, name: "Bluetooth Speaker", price: 1500, category: "Electronics" },
  { id: 13, name: "Power Bank", price: 1000, category: "Electronics" },
  { id: 14, name: "Wrist Watch", price: 2500, category: "Accessories" },
  { id: 15, name: "Sunglasses", price: 900, category: "Accessories" },
  { id: 16, name: "Jeans", price: 1200, category: "Apparel" },
  { id: 17, name: "Jacket", price: 2500, category: "Apparel" },
  { id: 18, name: "Hat", price: 300, category: "Apparel" },
  { id: 19, name: "Charger", price: 700, category: "Electronics" },
  { id: 20, name: "Fan", price: 1800, category: "Home Essentials" },
  { id: 21, name: "Book", price: 350, category: "Stationery" },
  { id: 22, name: "Pillow", price: 500, category: "Home Essentials" },
  { id: 23, name: "Blanket", price: 1000, category: "Home Essentials" },
  { id: 24, name: "Toothbrush", price: 40, category: "Personal Care" },
  { id: 25, name: "Toothpaste", price: 80, category: "Personal Care" },
  { id: 26, name: "Shampoo", price: 150, category: "Personal Care" },
  { id: 27, name: "Soap", price: 50, category: "Personal Care" },
  { id: 28, name: "Earphones", price: 800, category: "Electronics" },
  { id: 29, name: "Hand Sanitizer", price: 100, category: "Personal Care" },
  { id: 30, name: "Face Mask", price: 20, category: "Personal Care" },
  { id: 31, name: "Camera", price: 35000, category: "Electronics" },
  { id: 32, name: "Tripod", price: 1000, category: "Electronics" },
  { id: 33, name: "Microphone", price: 2000, category: "Electronics" },
  { id: 34, name: "LED Strip", price: 600, category: "Electronics" },
  { id: 35, name: "Gaming Chair", price: 7000, category: "Furniture" },
  { id: 36, name: "Office Table", price: 8000, category: "Furniture" },
  { id: 37, name: "Curtains", price: 1000, category: "Home Essentials" },
  { id: 38, name: "Slippers", price: 200, category: "Footwear" },
  { id: 39, name: "Socks", price: 80, category: "Apparel" },
  { id: 40, name: "Wallet", price: 600, category: "Accessories" },
  { id: 41, name: "Belt", price: 400, category: "Accessories" },
  { id: 42, name: "Comb", price: 30, category: "Personal Care" },
  { id: 43, name: "Hair Oil", price: 120, category: "Personal Care" },
  { id: 44, name: "Deodorant", price: 250, category: "Personal Care" },
  { id: 45, name: "Mirror", price: 500, category: "Home Essentials" },
  { id: 46, name: "Nail Cutter", price: 70, category: "Personal Care" },
  { id: 47, name: "Power Strip", price: 350, category: "Electronics" },
  { id: 48, name: "Extension Cord", price: 500, category: "Electronics" },
  { id: 49, name: "Lunch Box", price: 300, category: "Home Essentials" },
  { id: 50, name: "Raincoat", price: 900, category: "Apparel" },

  // 51–100 added below
  { id: 51, name: "Smartwatch", price: 3200, category: "Electronics" },
  { id: 52, name: "Stapler", price: 120, category: "Stationery" },
  { id: 53, name: "Thermal Flask", price: 700, category: "Home Essentials" },
  { id: 54, name: "LED Bulb", price: 150, category: "Electronics" },
  { id: 55, name: "Cap", price: 250, category: "Apparel" },
  { id: 56, name: "Gym Bag", price: 1000, category: "Accessories" },
  { id: 57, name: "Hair Dryer", price: 1800, category: "Personal Care" },
  { id: 58, name: "Laptop Stand", price: 1300, category: "Electronics" },
  { id: 59, name: "Ink Pen", price: 90, category: "Stationery" },
  { id: 60, name: "Sweater", price: 1500, category: "Apparel" },
  { id: 61, name: "Table Clock", price: 400, category: "Home Essentials" },
  { id: 62, name: "USB Cable", price: 300, category: "Electronics" },
  { id: 63, name: "Trolley Bag", price: 3500, category: "Accessories" },
  { id: 64, name: "Shaving Kit", price: 750, category: "Personal Care" },
  { id: 65, name: "Room Heater", price: 2200, category: "Home Essentials" },
  { id: 66, name: "Rain Boots", price: 1200, category: "Footwear" },
  { id: 67, name: "Notebook Set", price: 200, category: "Stationery" },
  { id: 68, name: "Rug", price: 1800, category: "Furniture" },
  { id: 69, name: "Keychain", price: 50, category: "Accessories" },
  { id: 70, name: "Filing Tray", price: 300, category: "Stationery" },
  { id: 71, name: "Curtain Rod", price: 800, category: "Home Essentials" },
  { id: 72, name: "Shower Cap", price: 150, category: "Personal Care" },
  { id: 73, name: "Beanie", price: 350, category: "Apparel" },
  { id: 74, name: "Yoga Mat", price: 900, category: "Accessories" },
  { id: 75, name: "Flashlight", price: 600, category: "Electronics" },
  { id: 76, name: "Photo Frame", price: 500, category: "Home Essentials" },
  { id: 77, name: "Clipboard", price: 100, category: "Stationery" },
  { id: 78, name: "Floor Mat", price: 400, category: "Home Essentials" },
  { id: 79, name: "Water Jug", price: 350, category: "Home Essentials" },
  { id: 80, name: "Folding Chair", price: 1800, category: "Furniture" },
  { id: 81, name: "Perfume", price: 900, category: "Personal Care" },
  { id: 82, name: "Air Freshener", price: 200, category: "Home Essentials" },
  { id: 83, name: "Marker Pen", price: 60, category: "Stationery" },
  { id: 84, name: "Wall Clock", price: 1100, category: "Home Essentials" },
  { id: 85, name: "Iron Box", price: 2200, category: "Electronics" },
  { id: 86, name: "Toaster", price: 1800, category: "Electronics" },
  { id: 87, name: "Shower Gel", price: 240, category: "Personal Care" },
  { id: 88, name: "Laundry Basket", price: 700, category: "Home Essentials" },
  { id: 89, name: "Shoe Polish", price: 60, category: "Footwear" },
  { id: 90, name: "Whiteboard", price: 1300, category: "Stationery" },
  { id: 91, name: "Scarf", price: 500, category: "Apparel" },
  { id: 92, name: "Shoe Rack", price: 2500, category: "Furniture" },
  { id: 93, name: "Toothpick", price: 20, category: "Personal Care" },
  { id: 94, name: "Highlighter", price: 40, category: "Stationery" },
  { id: 95, name: "Bed Sheet", price: 1400, category: "Home Essentials" },
  { id: 96, name: "Door Mat", price: 300, category: "Home Essentials" },
  { id: 97, name: "Bluetooth Mouse", price: 900, category: "Electronics" },
  { id: 98, name: "Lunch Bag", price: 400, category: "Accessories" },
  { id: 99, name: "Hair Brush", price: 200, category: "Personal Care" },
  { id: 100, name: "Track Pants", price: 1100, category: "Apparel" }
]


router.get('/product', (req, res) => {
  res.json({ data:{product:product}  })
  
})
router.get('/product/:id', (req, res) => {
  const id =parseInt(req.params.id)
  const data= product.find(u=>u.id==id)
  if(!data){
    res.status(404).json({
      error:`Api has only ${product.length} products`,
      message:`But you request is ${id}`
    })
  }
  res.json({ data:{product:data}  })
  
})
router.post('/product', (req, res) => {
  const{name,price,category}=req.body
  const new_user={
    id:product.length+1,
    name,
    price,
    category
  }
  product.push(new_user)
  res.json({message:"New product Added" ,data:{product:new_user}  })
  
})
router.put('/product/:id', (req, res) => {
  const id =parseInt(req.params.id)
  const data= product.find(u=>u.id==id)
   if(!data){
    res.status(404).json({
      error:`Api has only ${product.length} products`,
      message:`But you request is ${id}`
    })
  }
  const{name,price,category}=req.body
  if(name){data.name=name}
  if(price){data.price=price}
  if(category){data.category=category}
  res.json({ data:{product:data}  })
  
})
router.delete('/product/:id', (req, res) => {
  const id =parseInt(req.params.id)
  const dataindex= product.findIndex(u=>u.id==id)
 const user =product.splice(dataindex,1)[0]
  res.json({
    message:"Product Removed",
    Removed:user
  })
})
module.exports = router
