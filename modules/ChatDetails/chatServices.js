const message = require("./chatModule");

const getDetail = async (id) => {
    try {
        const response = await message?.getDetails(id);
        console.log('resp', response?.recordset?.map(item => item))
        return {
            "success": true,
            "successCode": 200,
            "message": "Message list retrieved successfully",
            "data": response?.recordset?.length ? (response?.recordset?.map(item => ({
                "id": item?.U_mid,
                "createdBy": item?.brow_id,
                "title": item?.title_id,
                "message": item?.message
            })
            )) : []
        };
    }
    catch (error) {
        throw error;
    }
}
const saveChat = async (data) => {
    try {
        const response = await message?.create(data);
        return {
            "success": true,
            "successCode": 200,
            "message": "Message Inserted Successfully",
        };
    }
    catch (error) {
        throw error;
    }
}
module.exports = { getDetail, saveChat }