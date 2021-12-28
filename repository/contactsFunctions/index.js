const listContacts = require("./ListContacts")
const getContactById = require("./getContactById")
const addContact = require("./addContact")
const deleteContact = require("./deleteContact")
const updateContactById = require("./updateContactById")
const favorite = require("./favorite")

module.exports = {
  listContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContactById,
  favorite
}
