const contactsOperations = require("../../../model/contactsFunctions");
const deleteContact = async (req, res) => {
  const {contactId} = req.params;
  const contactsWithDeletedItem = await contactsOperations.deleteContact(contactId)
  if (!contactsWithDeletedItem) {
    return res.status(404).json({message: `Contact with id ${contactId} not found`})
  }
  res.status(200).json({status: "delete contact success"})
}
module.exports = deleteContact