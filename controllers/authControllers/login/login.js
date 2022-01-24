const AuthService = require("../../../service/auth")
const authService = new AuthService()
const statusCode = require("../../../libs/statusCodes");
const customError = require("../../../libs/customError");

const login = async (req, res) => {
  const {email, password} = req.body
  const user = await authService.getUser(email, password)
  if (!user) {
    throw new customError(statusCode.Unauthorized, "Email or password is wrong")
  }
  const token = authService.getToken(user)
  await authService.setToken(user.id, token)

  res.status(statusCode.Ok).json({status: "success", data: {token}})

};

module.exports = login