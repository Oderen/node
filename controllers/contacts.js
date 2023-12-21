const { Contact } = require("../models/contact");
const helpers = require("../helpers/index");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "", { skip, limit }).populate(
    "owner",
    "name email"
  );
  res.status(200).json(result);
};

const getByID = async (req, res) => {
  const { id } = req.params;

  const result = await Contact.findById(id);

  if (!result) {
    throw helpers.HttpError(404, "Not Found");
  }
  res.status(200).json(result);
};

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });

  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw helpers.HttpError(404, "Not Found");
  }
  res.status(200).json(result);
};

const updateFavotire = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw helpers.HttpError(404, "Not Found");
  }
  res.status(200).json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw helpers.HttpError(404, "Not Found");
  }

  res.status(200).json({ message: "contact deleted" });
};

module.exports = {
  getAll: helpers.ctrlWrappwer(getAll),
  getByID: helpers.ctrlWrappwer(getByID),
  add: helpers.ctrlWrappwer(add),
  deleteContact: helpers.ctrlWrappwer(deleteContact),
  updateById: helpers.ctrlWrappwer(updateById),
  updateFavotire: helpers.ctrlWrappwer(updateFavotire),
};
