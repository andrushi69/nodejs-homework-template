const contactsOperations = require("../../../repository/contactsFunctions");

const listContacts = async (req, res) => {
  const {id: userId} = req.user
  const contacts = await contactsOperations.listContacts(userId);
  res.status(200).json({contacts, status: "success"})
};
module.exports = listContacts
