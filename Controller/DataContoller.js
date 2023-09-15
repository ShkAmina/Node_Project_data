const dummyData = require("../DummyData")

const articale = (req, res) => {
    res.send(dummyData)
}
const specificArticale = (req, res) => {
    res.send("End of the result")
}


module.exports = {articale,specificArticale}