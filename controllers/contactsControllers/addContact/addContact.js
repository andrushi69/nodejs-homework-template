const contactsOperations = require("../../../repository/contactsFunctions");
const addContact = async (req, res) => {
  const {id: userId} = req.user
  const contacts = await contactsOperations.addContact(userId, req.body);
  res.status(201).json({contacts, status: "success"})
};
module.exports = addContact