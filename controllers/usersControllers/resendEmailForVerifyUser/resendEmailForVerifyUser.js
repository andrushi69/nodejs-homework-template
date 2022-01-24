const User = require("../../../repository/authFunctions")
const {emailService, senderNodemailer} = require("../../../service/email");
const customError = require("../../../libs/customError");
const statusCode = require("../../../libs/statusCodes");


const resendEmailForVerifyUser = async (req, res) => {
  const {email} = req.body
  const user = await User.findByEmail(email)
  if (user) {
    const {name, email, verifyToken} = user
    const emailVerifyService = new emailService(process.env.NODE_ENV, new senderNodemailer())
    const isSend = await emailVerifyService.sendVerifyEmail(name, email, verifyToken)
    if (isSend) {
      return res.status(statusCode.Ok).json({message: "Success", isSendVerifyEmail: isSend})
    }
    throw new customError(statusCode.Se, "Service unavailable")
  }
  throw new customError(statusCode.NotFound, "Not found")

}

module.exports = resendEmailForVerifyUser

