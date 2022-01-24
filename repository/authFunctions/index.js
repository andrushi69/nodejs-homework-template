const User = require("../../model/auth")

const findById = async (id) => {
  return User.findById(id);
}
const findByEmail = async (email) => {
  return User.findOne({email});
}
const findByVerifyToken = async (verifyToken) => {
  return User.findOne({verifyToken});
}

const create = async (body) => {
  const user = await new User(body)
  return await user.save()
}
const updateToken = async (id, token) => {
  return User.updateOne({_id: id}, {token});
}
const updateVerify = async (id, status) => {
  return User.updateOne({_id: id}, {isVerifyToken: status, verifyToken: null});
}
const updateAvatar = async (id, avatar, cloudAvatar = null) => {
  return User.updateOne({_id: id}, {avatar, cloudAvatar});
}
const getUserByToken = async (token) => {
  return User.findOne({token})
}
const updateSubscription = async (subscription) => {
  return User.findOneAndUpdate({subscription})
}

module.exports = {
  findById,
  findByEmail,
  create,
  updateToken,
  getUserByToken,
  updateSubscription,
  updateAvatar,
  findByVerifyToken,
  updateVerify
}