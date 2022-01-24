const contactsOperations = require("../../../repository/contactsFunctions");
const statusCode = require("../../../libs/statusCodes");
const addContact = async (req, res) => {
  const {id: userId} = req.user
  const contacts = await contactsOperations.addContact(userId, req.body);
  res.status(statusCode.Created).json({status: "success", data: {contacts}})
};
module.exports = addContact