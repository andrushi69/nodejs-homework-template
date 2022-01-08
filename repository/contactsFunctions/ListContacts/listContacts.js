const Contact = require("../../../model/contacts")

const listContacts = async (userId) => {
  return Contact.find({owner: userId}).populate({
    path: "owner",
    select: "name email favorite"
  })
}

module.exports = listContacts
