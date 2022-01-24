const authOperations = require("../../../repository/authFunctions");
const customError = require("../../../libs/customError");
const statusCode = require("../../../libs/statusCodes");

const changeSubscription = async (req, res) => {
  const {subscription} = req.body
  const sub = await authOperations.updateSubscription(subscription)
  if (sub) {
    return res.status(statusCode.Ok).json({status: "field successfully changed"})
  }
  throw new customError(statusCode.NotFound, "Missing field subscription")
};
module.exports = changeSubscription