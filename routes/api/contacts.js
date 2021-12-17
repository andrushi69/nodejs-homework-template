const express = require('express')
const router = express.Router()
const {contacts: ctrl} = require('../../controllers/contactsControllers')
const {controllerWrapper, validation} = require("../../middlewares")
const {schemaValidation} = require('../../schemas');


router.get('/', controllerWrapper(ctrl.listContacts))
  .get('/:contactId', controllerWrapper(ctrl.getContactById))
  .post('/', validation(schemaValidation), controllerWrapper(ctrl.addContact))
  .delete('/:contactId', controllerWrapper(ctrl.deleteContact))
  .put('/:contactId', validation(schemaValidation), controllerWrapper(ctrl.updateContactsById))

module.exports = {contactsRouter: router}
