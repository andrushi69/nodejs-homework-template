const AuthService = require("../../../service/auth")
const authService = new AuthService()

const logout = async (req, res) => {
  await authService.setToken(req.user.id, null)
  res.status(204).json({status: "No content"})
};

module.exports = logout