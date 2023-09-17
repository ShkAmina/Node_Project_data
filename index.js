const express =require('express');
const cors=require("cors")
const route  = require('./Routes/Route');
const app= express();
const port=5000
app.use(cors({
    origin:"*"
}))
app.use("/api/news",route)
// app.use("/product",product)
app.listen(port,()=>{
  console.log(`Server is live in port.${port}`)

})
//http://localhost:5000/api/news/data