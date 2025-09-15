import Joi from "joi";

 export const titleValidator = Joi.object({
  title: Joi.string().required().messages({
   'string.empty': 'field is not allowed to be empty',
   'any.required': 'film is not found'
  })
 })