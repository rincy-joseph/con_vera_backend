const { messageList } = require("./messageModule")

const get = async () => {
    try {
        const response = await messageList?.fetchCommunications();
        return {
            "success": true,
            "successCode": 200,
            "message": "Message list retrieved successfully",
            "data": response?.recordset?.length ? (response?.recordset?.map(item => ({
                "id": item?.title_id,
                "created": item?.b_created,
                "title": item?.title,
                "description": item?.descript
            })
            )) : []
        };
    }
    catch (error) {
        throw error;
    }
}
module.exports = { get }