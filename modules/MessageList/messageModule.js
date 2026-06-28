const connectDB = require("../../db")

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
        try {
            const db = connectDB();
            const result = (await db).request()
                .input('titleId', 123)
                .input('createdBy', data?.createdBy)
                .input('title', data?.title)
                .input('description', data?.description)
                .input('tags', JSON.stringify(data?.tags))
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