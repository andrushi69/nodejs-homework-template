const express = require('express')
const router = express.Router()
const {contacts: ctrl} = require('../../../controllers/contactsControllers')
const {controllerWrapper, validation, authGuard} = require("../../../middlewares")
const {schemaValidation} = require('../../../schemas/joiValidationForContacts');


router.get('/', authGuard, controllerWrapper(ctrl.listContacts))
  .get('/:contactId', authGuard, controllerWrapper(ctrl.getContactById))
  .post('/', authGuard, validation(schemaValidation.schema), controllerWrapper(ctrl.addContact))
  .delete('/:contactId', authGuard, controllerWrapper(ctrl.deleteContact))
  .put('/:contactId', authGuard, validation(schemaValidation.schema), controllerWrapper(ctrl.updateContactsById))
  .patch('/:contactId/favorite', authGuard, validation(schemaValidation.favoriteSchema), controllerWrapper(ctrl.favorite))

module.exports = {contactsRouter: router}
