const dataDummy = require("../dataDummy")

const articale = (req, res) => {
    res.send(dataDummy)
}
const specificArticale = (req, res) => {
    res.send("End of the result")
}


module.exports = {articale,specificArticale}