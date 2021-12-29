const express = require('express')
const router = express.Router()
const {contacts: ctrl} = require('../../controllers/contactsControllers')
const {controllerWrapper, validation} = require("../../middlewares")
const {schemaValidation} = require('../../schemas/joiValidationForContacts');


router.get('/', controllerWrapper(ctrl.listContacts))
  .get('/:contactId', controllerWrapper(ctrl.getContactById))
  .post('/', validation(schemaValidation.schema), controllerWrapper(ctrl.addContact))
  .delete('/:contactId', controllerWrapper(ctrl.deleteContact))
  .put('/:contactId', validation(schemaValidation.schema), controllerWrapper(ctrl.updateContactsById))
  .patch('/:contactId/favorite', validation(schemaValidation.favoriteSchema), controllerWrapper(ctrl.favorite))

module.exports = {contactsRouter: router}
