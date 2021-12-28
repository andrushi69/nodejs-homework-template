const listContacts = require("../listContacts");
const fs = require("fs/promises");
const path = require("path");

const updateContactById = async (id, data) => {
  const contacts = await listContacts();
  const contactId = contacts.findIndex(contact => contact.id === id);
  if (contactId === -1) {
    return null;
  }
  contacts[contactId] = {...contacts[contactId], ...data};
  await fs.writeFile(path.join(__dirname, "../../../db/contacts.json"), JSON.stringify(contacts, null, 2))
  return contacts[contactId];
}
module.exports = updateContactById