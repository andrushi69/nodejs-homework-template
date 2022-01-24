const User = require("../../../repository/authFunctions")
const statusCode = require("../../../libs/statusCodes");
const customError = require("../../../libs/customError");

const verifyUser = async (req, res) => {
  const verifyToken = req.params.token
  const currentUserFromToken = await User.findByVerifyToken(verifyToken)
  if (currentUserFromToken) {
    await User.updateVerify(currentUserFromToken, true)
    return res.status(statusCode.Ok).json({message: "Success"})
  }
  throw new customError(statusCode.BadRequest, "Invalid Token")
}

module.exports = verifyUser