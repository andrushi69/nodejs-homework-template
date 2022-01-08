const AuthService = require("../../../service/auth")
const authService = new AuthService()

const login = async (req, res) => {
  const {email, password} = req.body
  const user = await authService.getUser(email, password)
  if (!user) {
    return res.status(401).json({message: "Email or password is wrong"})
  }
  const token = authService.getToken(user)
  await authService.setToken(user.id, token)
  res.status(200).json({data: {token}, status: "success"})
};

module.exports = login