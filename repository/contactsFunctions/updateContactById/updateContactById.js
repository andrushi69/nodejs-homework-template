const Contact = require("../../../model/contacts")

const updateContactById = async (id, userId, data) => {
  return Contact.findOneAndUpdate({owner: userId, _id: id}, {...data}, {new: true}).populate({
    path: "owner",
    select: "name email favorite"
  })
}
module.exports = updateContactById