const { getDetail } = require("./chatServices");


const getDetails = async (req, res) => {
    try {
        const response = await getDetail(req?.params?.id || 0);
        res.status(200).json(response)
    }
    catch (err) {
        res.status(500).json({ message: err?.message || "Internal Server Error" });
    }
}
module.exports = { getDetails }