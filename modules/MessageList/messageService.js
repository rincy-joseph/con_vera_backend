const { messageList } = require("./messageModule")

const get = async () => {
    try {
        const response = await messageList?.fetchCommunications();
        return {
            "success": true,
            "successCode": 200,
            "message": "Message list retrieved successfully",
            "data": response?.recordset?.length ? (response?.recordset?.map(item => ({
                "slab_id": item?.title_id,
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
const createDiscussion = async (data) => {
    try {
        if (data.tags && Array.isArray(data.tags) && data.tags.length > 3) {
            return {
                "success": false,
                "successCode": 400,
                "message": "Tag contains more than 3 elements",
            };
        }
        const response = await messageList?.createDiscussion(data);
        console.log("response", response)
        return {
            "success": true,
            "successCode": 200,
            "message": "Message Inserted successfully",
            "data": response?.recordset?.length ? (response?.recordset?.map(item => ({
                "id": item?.titleId

            })
            )) : []
        };
    }
    catch (error) {
        throw error;
    }
}
module.exports = { get, createDiscussion }