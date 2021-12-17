const listContacts = require("./listContacts");

const getContactById = async (id) => {
  const contacts = await listContacts()
  return contacts.filter(item => item.id === id)
}
module.exports = getContactById