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
    try{
        console.log(`server is running in port.${port}`)
    }
    catch(err){
        console.log(`In starting a server we got.${err}`)
    };

})
//http://localhost:5000/api/news/data