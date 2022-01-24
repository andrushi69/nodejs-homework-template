const Router = require("express");
const {controllerWrapper, authGuard, upload, validation} = require("../../../middlewares");
const {users: ctrl} = require("../../../controllers/usersControllers");
const {schemaValidation} = require("../../../schemas/joiValidationForContacts");

const router = new Router()

router
  .patch('/avatar', authGuard, upload.single("avatar"), controllerWrapper(ctrl.uploadAvatar))
  .get('/verify/:token', controllerWrapper(ctrl.verifyEmail))
  .post('/verify', validation(schemaValidation.verifyEmail), controllerWrapper(ctrl.resendEmailForVerifyUser))

module.exports = {usersRouter: router}