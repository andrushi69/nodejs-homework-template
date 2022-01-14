const Contact = require("../../../model/contacts")

const getContactById = async (userId, id) => {
  return Contact.findOne({owner: userId, _id: id}).populate({
    path: "owner",
    select: "name email favorite"
  })
}
module.exports = getContactById