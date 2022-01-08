const AuthService = require("../../../service/auth")
const authService = new AuthService()

const getCurrentUser = async (req, res) => {
  const {token} = req.user;
  const {email, subscription, name} = await authService.getCurrentUser(token)
  res.status(200).json({data: {name, email, subscription}, status: "success"})
};

module.exports = getCurrentUser