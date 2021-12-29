const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'ru', 'ua', 'net']}}).required(),
  phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  favorite: Joi.boolean(),
})

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required()
})

module.exports = {schema, favoriteSchema}