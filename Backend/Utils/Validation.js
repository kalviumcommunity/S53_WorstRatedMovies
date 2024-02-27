const Joi = require("joi");

const ValidationSignup= Joi.object({
  fullname: Joi.string().min(5).required(),
    username:Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const Validation = Joi.object({
  MovieName: Joi.string().required(),
  ImgLink: Joi.string().required(),
  Date: Joi.string(),
  Director: Joi.string(),
  Rating: Joi.number().required().max(6),
});

module.exports = { Validation, ValidationSignup };
