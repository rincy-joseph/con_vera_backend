const mssql = require('mssql')
async function connectDB(){
const db = await mssql.connect({
    user: 'app_user', 
    password: 'MySecurePassword123',
    server: 'localhost',
    database: 'con_vera_db',
    port: 50221,
    options: {
        encrypt: true, 
        trustServerCertificate: true
    }
})
return db
}
module.exports = connectDB