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
                "slab_id": item?.chat_under,
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
        const response = await messageList?.createDiscussion(data);
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