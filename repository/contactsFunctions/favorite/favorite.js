const Contact = require("../../../model/contacts")

const getFavorite = async (id, data) => {
  return Contact.findByIdAndUpdate(id, {...data}, {new: true})
}
module.exports = getFavorite