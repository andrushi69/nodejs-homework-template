const Contact = require("../../../model/contacts")

const addContact = async (data) => {
  return Contact.create(data)
};
module.exports = addContact