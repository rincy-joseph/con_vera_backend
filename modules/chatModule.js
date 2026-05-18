const db = require("../db");

const message = {
    create: async (data) => {
        console.log("CommonMessage data", data?.message, data?.senderMAC)
        console.log("CommonMessage db", db)

        const sql = 'INSERT INTO message_hash (message, brow_id, title_id) values ( ? , ? , ? )';
        console.log("CommonMessage command", db.execute(sql, [data?.message, data?.senderMAC, '123']))

        const [result] = db.execute(sql, [data?.message, data?.senderMAC]);
        console.log('CommonMessage result', result)
        return result;
    }
}
module.exports = message