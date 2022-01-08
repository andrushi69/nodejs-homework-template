const Contact = require("../../../model/contacts")

const getFavorite = async (id, userId, data) => {
  return Contact.findByIdAndUpdate({owner: userId, _id: id}, {...data}, {new: true})
}
module.exports = getFavorite