const contactsOperations = require("../../../repository/contactsFunctions");
const statusCode = require("../../../libs/statusCodes");

const listContacts = async (req, res) => {
  const {id: userId} = req.user
  const contacts = await contactsOperations.listContacts(userId);
  res.status(statusCode.Ok).json({status: "success", data: {contacts}})
};
module.exports = listContacts
