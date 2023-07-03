import Joi from 'joi';

export const LoginFormSchema = Joi.object({
  email: Joi.string()
    .email({
      tlds: {
        allow: false,
      },
    })
    .required()
    .messages({
      'string.email': 'Email must not be valid!',
      'string.empty': 'Email must not be empty!',
    }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must not be lower than 6 characters!',
    'string.empty': 'Password must not be empty!',
  }),
});
