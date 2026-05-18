const mysql = require('mysql2/promise')
const db =  mysql.createConnection({
    host: 'localhost',
    database: 'con_vera'
})
module.exports = db