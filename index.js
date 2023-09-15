const express =require('express');
const route  = require('./Routes/Route');
const app= express();
const port=5000
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