const contactsOperations = require("../../../repository/contactsFunctions");
const deleteContact = async (req, res) => {
  const {contactId} = req.params;
  const contact = await contactsOperations.deleteContact(contactId)
  if (!contact) {
    return res.status(404).json({message: `Contact with id ${contactId} not found`})
  }
  res.status(200).json({contact, status: "this is deleted contact"})
}
module.exports = deleteContact