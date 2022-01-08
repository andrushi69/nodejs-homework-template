const jwt = require("jsonwebtoken")
const User = require("../model/auth")
const SECRET_KEY = process.env.JWT_SECRET_KEY

const verifyToken = (token) => {
  try {
    const verify = jwt.verify(token, SECRET_KEY)
    return !!verify
  } catch (error) {
    return false
  }
}

const authGuard = async (req, res, next) => {
  const token = await req.get("authorization")?.split(" ")[1]
  const isValidToken = verifyToken(token)
  if (!isValidToken) {
    return res.status(401).json({message: "Not authorized"})
  }
  const payload = jwt.decode(token)
  const user = await User.findById(payload.id)
  if (!user || user.token !== token) {
    return res.status(401).json({message: "Not authorized"})
  }
  req.user = user
  next()
}

module.exports = authGuard