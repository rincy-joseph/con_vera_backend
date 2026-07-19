const connectDB = require("../../db")
const crypto = require('crypto')
const sql = require('mssql')

const messageList = {
    fetchCommunications: async () => {
        try {
            const db = connectDB();
            const sql = 'SELECT * FROM chat_hash';
            const result = await (await db).request()
                .query(sql);
            if (result) {
                return result;
            }
        }
        catch (error) {
            console.log("error", error)
            throw error;
        }
    },
    createDiscussion: async (data) => {
        const pureBase64Iamge = data.files.map(item => item.replace(/^data:image\/\w+;base64,/, ""))
        try {
            const db = connectDB();
            const result = (await db).request()
                .input('titleId', crypto.randomInt(100000, 999999))
                .input('createdBy', data?.createdBy)
                .input('title', data?.title)
                .input('description', data?.description)
                .input('tags', JSON.stringify(data?.tags))
                .input('images', sql.NVarChar(sql.MAX), JSON.stringify(pureBase64Iamge))//sql.NVarChar(sql.MAX), 
                .execute("CreateDiscussionHub");
            if (result) {
                return result
            }
        }
        catch (error) {
            throw error;
        }

    }
}
module.exports = { messageList }