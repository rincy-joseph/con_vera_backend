const mssql = require('mssql')
async function connectDB() {
    const db = await mssql.connect({
        user: 'app_user',
        password: 'MySecurePassword123',
        server: 'localhost',
        database: 'con_vera',
        port: 1433,
        options: {
            encrypt: true,
            trustServerCertificate: true
        }
    })
    return db
}
module.exports = connectDB