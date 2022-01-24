const emailService = require("./service")
const {senderSendGrid, senderNodemailer} = require("./sender")

module.exports = {emailService, senderSendGrid, senderNodemailer}