const AuthService = require("../../../service/auth")
const authService = new AuthService()

const signup = async (req, res) => {
  const {email} = req.body
  const isUserExist = await authService.isUserExist(email)
  if (isUserExist) {
    return res.status(409).json({message: "This email is already exist"})
  }
  const data = await authService.create(req.body)
  res.status(200).json({data, status: "success"})
};

module.exports = signup