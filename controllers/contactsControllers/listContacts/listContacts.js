const contactsOperations = require("../../../model/contactsFunctions");

const listContacts = async (req, res) => {
  const contacts = await contactsOperations.listContacts();
  res.status(200).json({contacts, status: "success"})
};
module.exports = listContacts
