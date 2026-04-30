const message = require('./chatModule')
const saveChat = async(data) => {
const result = await message.create(data)

}
module.exports = {saveChat}