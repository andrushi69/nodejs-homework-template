const AuthService = require("../../../service/auth")
const {emailService, senderSendGrid} = require("../../../service/email")
const statusCode = require("../../../libs/statusCodes");
const customError = require("../../../libs/customError");
const authService = new AuthService()

const signup = async (req, res) => {
  const {email} = req.body
  const isUserExist = await authService.isUserExist(email)
  if (isUserExist) {
    throw new customError(statusCode.Conflict, "This email is already exist")
  }
  const data = await authService.create(req.body)
  const emailVerifyService = new emailService(process.env.NODE_ENV, new senderSendGrid())
  const isSend = await emailVerifyService.sendVerifyEmail(data.name, email, data.verifyToken)
  delete data.verifyToken
  res.status(statusCode.Created).json({status: "success", isSendVerifyEmail: isSend, data: {...data}})
};


module.exports = signup