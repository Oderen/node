const express = require("express");

const { validateBody, authentificate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const ctrl = require("../../controllers/auth");

const route = express.Router();

route.post("/register", validateBody(schemas.registerSchema), ctrl.register);

route.get("/verify/:verificationCode", ctrl.verifyEmail);

route.post("/verify", validateBody(schemas.emailSchema), ctrl.resendEmail);

route.post("/login", validateBody(schemas.loginSchema), ctrl.login);

route.get("/current", authentificate, ctrl.getCurrent);

route.post("/logout", authentificate, ctrl.logout);

route.patch(
  "/avatars",
  authentificate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = route;
