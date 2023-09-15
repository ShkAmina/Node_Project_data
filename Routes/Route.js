const route = require("express").Router();
const{ articale,specificArticale} = require("../Controller/DataContoller");
// const validate = require("../Middleware/DataMiddleware");
route.get("/data", articale)
route.get("/data/:id", specificArticale)
module.exports = route

//http://localhost:6000/api/news/data