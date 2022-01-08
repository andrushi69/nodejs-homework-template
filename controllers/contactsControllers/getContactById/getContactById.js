const contactsOperations = require("../../../repository/contactsFunctions");

const getContactById = async (req, res) => {
  const {contactId} = req.params;
  const {id: userId} = req.user
  const contact = await contactsOperations.getContactById(userId, contactId);
  if (!contact) {
    return res.status(400).json({message: `Contact with id ${contactId} not found`})
  }
  res.status(200).json({contact, status: "success"})
};

module.exports = getContactById
