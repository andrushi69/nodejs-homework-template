const contactsOperations = require('../../model/contactsFunctions');

const listContacts = async (req, res) => {
  const contacts = await contactsOperations.listContacts();
  res.status(200).json({contacts, status: "success"})
};
const getContactById = async (req, res) => {
  const {contactId} = req.params;
  const [contact] = await contactsOperations.getContactById(contactId);
  if (!contact) {
    return res.status(400).json({message: `Contact with id ${contactId} not found`})
  }
  res.status(200).json({contact, status: "success"})
};
const addContact = async (req, res) => {
  const contacts = await contactsOperations.addContact(req.body);
  res.status(201).json({contacts, status: "success"})
};
const deleteContact = async (req, res) => {
  const {contactId} = req.params;
  const contactsWithDeletedItem = await contactsOperations.deleteContact(contactId)
  if (!contactsWithDeletedItem) {
    return res.status(404).json({message: `Contact with id ${contactId} not found`})
  }
  res.status(200).json({status: "delete contact success"})
}
const updateContactsById = async (req, res) => {
  const {contactId} = req.params;
  const updatedContact = await contactsOperations.updateContactById(contactId, req.body)
  if (!updatedContact) {
    return res.status(404).json({message: `Contact with id ${contactId} not found`})
  }
  res.status(200).json({status: "update contact success"})
}

module.exports = {
  listContacts, getContactById, addContact, deleteContact, updateContactsById
}