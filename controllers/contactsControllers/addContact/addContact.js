const contactsOperations = require("../../../model/contactsFunctions");
const addContact = async (req, res) => {
  const contacts = await contactsOperations.addContact(req.body);
  res.status(201).json({contacts, status: "success"})
};
module.exports = addContact