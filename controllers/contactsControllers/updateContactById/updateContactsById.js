const contactsOperations = require("../../../repository/contactsFunctions");
const statusCode = require("../../../libs/statusCodes");
const customError = require("../../../libs/customError");

const updateContactsById = async (req, res) => {
  const {contactId} = req.params;
  const {id: userId} = req.user
  const updatedContact = await contactsOperations.updateContactById(contactId, userId, req.body, {new: true})
  if (updatedContact) {
    return res.status(statusCode.Ok).json({status: "update contact success"})
  }
  throw new customError(statusCode.NotFound, `Contact with id ${contactId} not found`)

}
module.exports = updateContactsById