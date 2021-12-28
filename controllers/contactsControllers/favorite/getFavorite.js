const contactsOperations = require("../../../repository/contactsFunctions");

const favorite = async (req, res) => {
  const {contactId} = req.params;
  const favoriteContact = await contactsOperations.favorite(contactId, req.body);
  if (!favoriteContact) {
    return res.status(404).json({message: "missing field favorite"})
  }
  res.status(200).json({favoriteContact, status: "success"})
};
module.exports = favorite