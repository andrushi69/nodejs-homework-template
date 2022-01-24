const contactsOperations = require("../../../repository/contactsFunctions");
const customError = require("../../../libs/customError");
const statusCode = require("../../../libs/statusCodes");


const deleteContact = async (req, res) => {
  const {contactId} = req.params;
  const {id: userId} = req.user
  const contact = await contactsOperations.deleteContact(userId, contactId)
  if (contact) {
    return res.status(statusCode.Ok).json({status: "this is deleted contact", data: {contact}})
  }
  throw new customError(statusCode.NotFound, `Contact with id ${contactId} not found`)
}
module.exports = deleteContact