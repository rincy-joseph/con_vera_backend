const { getDetail } = require("./chatServices");


const getDetails = async (req, res) => {
    try {
        console.log("CommonMessage req", req)
        const response = await getDetail();
        res.status(200).json(response)
    }
    catch (err) {
        res.status(500).json({ message: err?.message || "Internal Server Error" });
    }
}
module.exports = { getDetails }