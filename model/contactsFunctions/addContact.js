const listContacts = require("./listContacts");
const crypto = require("crypto");
const fs = require("fs/promises");
const path = require("path");

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = {id: crypto.randomUUID(), ...data}
  contacts.push(newContact);
  await fs.writeFile(path.join(__dirname, "../../db/contacts.json"), JSON.stringify(contacts, null, 2))
  return newContact;
};
module.exports = addContact