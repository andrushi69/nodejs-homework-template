const Router = require("express");
const {controllerWrapper, authGuard, upload} = require("../../../middlewares");
const {users: ctrl} = require("../../../controllers/usersControllers");

const router = new Router()

router
  .patch('/avatar', authGuard, upload.single("avatar"), controllerWrapper(ctrl.uploadAvatar));

module.exports = {usersRouter: router}