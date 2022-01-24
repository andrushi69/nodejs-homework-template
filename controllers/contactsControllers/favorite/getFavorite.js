const contactsOperations = require("../../../repository/contactsFunctions");
const statusCode = require("../../../libs/statusCodes");
const customError = require("../../../libs/customError");

const favorite = async (req, res) => {
  const {contactId} = req.params;
  const {id: userId} = req.user
  const favoriteContact = await contactsOperations.favorite(contactId, userId, req.body);
  console.log(contactId)
  console.log(userId)

  if (favoriteContact) {
   return  res.status(statusCode.Ok).json({status: "success", data: {favoriteContact}})
  }
  throw new customError(statusCode.NotFound, `Contact with id ${contactId} not found`)
};
module.exports = favorite