const authOperations = require("../../../repository/authFunctions");

const changeSubscription = async (req, res) => {
  const {subscription} = req.body
  const sub = await authOperations.updateSubscription(subscription)
  if (!sub) {
    return res.status(404).json({message: "missing field subscription"})
  }
  res.status(200).json({status: "field successfully changed"})
};
module.exports = changeSubscription