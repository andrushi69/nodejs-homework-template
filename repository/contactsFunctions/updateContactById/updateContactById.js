const Contact = require("../../../model/contacts")

const updateContactById = async (id, data) => {
  return Contact.findByIdAndUpdate(id, {...data}, {new: true})
}
module.exports = updateContactById