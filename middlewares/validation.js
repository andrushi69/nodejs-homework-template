const statusCode = require("../libs/statusCodes");
const validation = (schema) => {
  return (req, res, next) => {
    const {error} = schema.validate(req.body);
    if (error) {
      res.status(statusCode.BadRequest).json({message: error.message});
      return;
    }
    next();
  }
};
module.exports = validation;
