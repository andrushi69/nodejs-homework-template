const Contact = require("../../../model/contacts")

const deleteContact = async (userId, id) => {
  return Contact.findOneAndRemove({owner: userId, _id: id});
}
module.exports = deleteContact