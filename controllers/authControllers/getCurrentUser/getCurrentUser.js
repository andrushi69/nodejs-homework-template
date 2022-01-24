const AuthService = require("../../../service/auth")
const statusCode = require("../../../libs/statusCodes");
const authService = new AuthService()

const getCurrentUser = async (req, res) => {
  const {token} = req.user;
  const {email, subscription, name, avatar} = await authService.getCurrentUser(token)
  res.status(statusCode.Ok).json({status: "success", data: {name, email, subscription, avatar}})
};

module.exports = getCurrentUser