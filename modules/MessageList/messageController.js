const messaService = require('./messageService')
const getList = async (req, res) => {
    try {
        console.log("getList")
        const response = await messaService.get();
        res.status(200).json(response)
    }
    catch (err) {
        res.status(500).message(err.message)
    }
}
module.exports = { getList }