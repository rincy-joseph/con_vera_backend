const connectDB = require("../db");

const message = {
    create: async (data) => {
        try {
            const db = await connectDB()
            console.log("CommonMessage data", data?.message, data?.senderMAC)
            // console.log("CommonMessage db", await db)

            const sql = 'INSERT INTO message_hash (message, brow_id, title_id) values ( @message, @brow_id , @title_id )';
            const result = await db.request()
                .input('message', data?.message)
                .input('brow_id', data?.senderMAC)
                .input('title_id', '123')
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