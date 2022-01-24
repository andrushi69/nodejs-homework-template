const AuthService = require("../../../service/auth")
const statusCode = require("../../../libs/statusCodes");
const authService = new AuthService()

const logout = async (req, res) => {
  await authService.setToken(req.user.id, null)
  res.status(statusCode.NoResponse).json({status: "No content"})
};

module.exports = logout