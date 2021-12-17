const listContacts = require("./listContacts");
const fs = require("fs/promises");
const path = require("path");

const deleteContact = async (id) => {
  const contacts = await listContacts();
  const contactId = contacts.findIndex(contact => contact.id === id);
  if (contactId === -1) {
    return null;
  }
  contacts.splice(contactId, 1);
  await fs.writeFile(path.join(__dirname, "../../db/contacts.json"), JSON.stringify(contacts, null, 2))
  return true;
}
module.exports = deleteContact