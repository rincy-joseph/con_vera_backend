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
    }
}
module.exports = { messageList }