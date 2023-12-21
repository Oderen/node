const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { HttpError } = require("../helpers");

const SECRET_KEY = "F^n;LUo?Tb&cpEtd4#lIs1teEtYGpZ";

const authentificate = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" && !token) {
    next(HttpError(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user.token) {
      next(HttpError(401));
    }
    req.user = user;
  } catch {
    next(HttpError(401));
  }

  next();
};

module.exports = authentificate;
