const connectDB = require("../../db");

const message = {
    create: async (data) => {
        try {
            const db = await connectDB()

            const sql = 'INSERT INTO message_hash (message, brow_id, title_id) values ( @message, @brow_id , @title_id )';
            const result = await db.request()
                .input('message', data?.message)
                .input('brow_id', data?.senderMAC)
                .input('title_id', data?.title)
                .query(sql);
            return result;
        }
        catch (error) {
            console.error('error', error)
            throw error
        }
    },
    getDetails: async (id) => {
        try {
            const db = await connectDB()
            const sql = 'SELECT * FROM message_hash WHERE title_id = @title_id';
            const result = await db.request()
                .input('title_id', id)
                .query(sql);
            return result;
        }
        catch (error) {
            console.error('error', error)
            throw error
        }
    }
}
module.exports = message