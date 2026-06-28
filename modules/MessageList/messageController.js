const messaService = require('./messageService')
const getList = async (req, res) => {
    try {
        console.log("getList")
        const response = await messaService.get();
        res.status(200).json(response)
    }
    catch (err) {
        res.status(500).json({ message: err?.message || "Internal Server Error" });
    }
}
const createDiscussion = async (req, res) => {
    try {
        const response = await messaService.createDiscussion(req.body || {});
        res.status(200).json(response)
    }
    catch (err) {
        res.status(500).json({ message: err?.message || "Internal Server Error" });
    }
}
module.exports = { getList, createDiscussion }