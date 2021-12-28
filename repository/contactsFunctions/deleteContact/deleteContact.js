const Contact = require("../../../model/contacts")

const deleteContact = async (id) => {
  return Contact.findByIdAndRemove(id);
}
module.exports = deleteContact