const Contact = require("../../../model/contacts")

const addContact = async (userId, data) => {
  return Contact.create({owner: userId, ...data})
};
module.exports = addContact