const Joi = require("joi");


module.exports.Validation = Joi.object({
    MovieName : Joi.string().required(),
    ImgLink : Joi.string().required(),
    Date : Joi.string(),
    Director : Joi.string(),
    Rating : Joi.number().required().max(6),  
});

