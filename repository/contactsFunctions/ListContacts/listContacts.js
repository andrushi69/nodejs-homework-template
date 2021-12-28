const Contact = require("../../../model/contacts")

const listContacts = async () => {
  return Contact.find();
}

module.exports = listContacts
