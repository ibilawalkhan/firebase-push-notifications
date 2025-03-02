import Joi from "joi"

export const notificationSchema = Joi.object({
  title: Joi.string().trim().min(1).required().messages({
    "string.empty": "Title is required",
    "string.min": "Title should have at least 1 character",
  }),
  body: Joi.string().trim().min(1).required().messages({
    "string.empty": "Body is required",
    "string.min": "Body should have at least 1 character",
  }),
  token: Joi.string().trim().min(1).required().messages({
    "string.empty": "Token is required",
    "string.min": "Token should have at least 1 character",
  }),
})
