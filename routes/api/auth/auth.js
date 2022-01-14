const Router = require("express");
const {controllerWrapper, validation, authGuard} = require("../../../middlewares");
const {auth: ctrl} = require("../../../controllers/authControllers");
const {schemaValidation} = require("../../../schemas/joiValidationForContacts");

const router = new Router()

router.post("/signup", validation(schemaValidation.userSchema), controllerWrapper(ctrl.signup))
  .post("/login", controllerWrapper(ctrl.login))
  .get("/logout", authGuard, controllerWrapper(ctrl.logout))
  .get("/users/current", authGuard, controllerWrapper(ctrl.getCurrentUser))
  .patch('/users', authGuard, validation(schemaValidation.subscription), controllerWrapper(ctrl.changeSubscription));

module.exports = {authRouter: router}