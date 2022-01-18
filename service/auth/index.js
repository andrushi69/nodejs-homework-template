const User = require("../../repository/authFunctions")
const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.JWT_SECRET_KEY


class AuthService {
  async isUserExist(email) {
    const user = await User.findByEmail(email)
    return !!user
  }

  async create(body) {
    const {id, name, email, avatar} = await User.create(body)
    return {id, name, email, avatar}
  }

  async getUser(email, password) {
    const user = await User.findByEmail(email, password)
    const isValidPassword = await user?.isValidPassword(password)
    if (!isValidPassword) {
      return null
    }
    return user
  }

  getToken(user) {
    const {id, email} = user
    const payload = {id, email}
    return jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"})
  }

  async setToken(id, token) {
    await User.updateToken(id, token)
  }

  async getCurrentUser(token) {
    return await User.getUserByToken(token)
  }

}

module.exports = AuthService