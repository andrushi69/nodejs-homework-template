const listContacts = require("./listContacts")
const deleteContact = require("./deleteContact")
const addContact = require("./addContact")
const getContactById = require("./getContactById")
const updateContactsById = require("./updateContactById")


module.exports = {
  listContacts, getContactById, addContact, deleteContact, updateContactsById
}