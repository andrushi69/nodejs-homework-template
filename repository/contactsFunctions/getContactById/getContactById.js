const Contact = require("../../../model/contacts")

const getContactById = async (id) => {
  return Contact.findById(id)
}
module.exports = getContactById