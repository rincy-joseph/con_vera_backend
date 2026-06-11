const message = require("./chatModule");

const getDetail = async () => {
    try {
        const response = await message?.getDetails();
        return {
            "success": true,
            "successCode": 200,
            "message": "Message list retrieved successfully",
            "data": response?.recordset?.length ? (response?.recordset?.map(item => ({
                "id": item?.title_id,
                "created": item?.b_created,
                "title": item?.chatTitle,
                "description": item?.descript
            })
            )) : []
        };
    }
    catch (error) {
        throw error;
    }
}
module.exports = { getDetail }