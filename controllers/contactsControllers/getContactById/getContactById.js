const contactsOperations = require("../../../model/contactsFunctions");

const getContactById = async (req, res) => {
  const {contactId} = req.params;
  const [contact] = await contactsOperations.getContactById(contactId);
  if (!contact) {
    return res.status(400).json({message: `Contact with id ${contactId} not found`})
  }
  res.status(200).json({contact, status: "success"})
};

module.exports = getContactById
