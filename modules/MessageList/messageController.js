const messaService = require('./messageService')
const getList = async (req, res) => {
    try {
        const response = await messaService.get();
        res.status(200).json(response)
    }
    catch (err) {
        res.status(500).json({ message: err?.message || "Internal Server Error" });
    }
}
const createDiscussion = async (req, res) => {
    try {
        if (req.body.tags && Array.isArray(req.body.tags) && req.body.tags.length > 3) {
            res.status(400).json({ success: false, message: "Tag contains more than 3 elements" });
            return
        }
        const response = await messaService.createDiscussion(req.body || {});
        res.status(200).json(response)
    }
    catch (err) {
        res.status(500).json({ message: err?.message || "Internal Server Error" });
    }
}
module.exports = { getList, createDiscussion }