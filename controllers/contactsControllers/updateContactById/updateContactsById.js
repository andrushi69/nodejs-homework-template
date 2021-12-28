const contactsOperations = require("../../../model/contactsFunctions");
const updateContactsById = async (req, res) => {
  const {contactId} = req.params;
  const updatedContact = await contactsOperations.updateContactById(contactId, req.body)
  if (!updatedContact) {
    return res.status(404).json({message: `Contact with id ${contactId} not found`})
  }
  res.status(200).json({status: "update contact success"})
}
module.exports = updateContactsById