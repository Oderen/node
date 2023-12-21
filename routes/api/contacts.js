const express = require("express");

const ctrl = require("../../controllers/contacts");

const router = express.Router();
const {
  validateBody,
  isValidId,
  authentificate,
} = require("../../middlewares");
const shemas = require("../../models/contact");

router.get("/", authentificate, ctrl.getAll);

router.get("/:id", authentificate, isValidId, ctrl.getByID);

router.post(
  "/",
  authentificate,
  validateBody(shemas.schema.addSchema),
  ctrl.add
);

router.put(
  "/:id",
  isValidId,
  validateBody(shemas.schema.addSchema),
  ctrl.updateById
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(shemas.schema.updateFavoriteSchema),
  ctrl.updateFavotire
);

router.delete("/:id", isValidId, ctrl.deleteContact);

module.exports = router;
