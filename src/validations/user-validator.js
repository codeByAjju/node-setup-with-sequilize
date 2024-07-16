import Joi from 'joi';

const userLoginUpdateSchema= Joi.object({
  email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: false } })
  .min(6)
  .max(50)
  .pattern(/^[^\s]+$/)
  .messages({
    'any.required': 'EMAIL_REQUIRED',
    'string.empty': 'EMAIL_REQUIRED',
    'string.email': 'VALID_EMAIL_ALLOWED',
    'string.min': 'EMAIL_MIN_VALIDATION',
    'string.max': 'EMAIL_MAX_VALIDATION',
    'string.pattern.base': 'EMAIL_FORMAT_INVALID',
    'string.pattern': 'SPACES_NOT_ALLOWED_IN_EMAIL',
  })
  .required(),  


  password: Joi.string()  
    .min(6)
    .label('Password')
    .required(),
  contact : Joi.string()
  .min(10)
  .max(10)
});

const userProfileUpdateSchema = Joi.object({
  name: Joi.string()
  .min(3)
  .max(20)
  .pattern(/^\D*$/)
  .messages({
    'any.required': 'NAME_REQUIRED',
    'string.empty': 'NAME_REQUIRED',
    'string.min': 'NAME_MIN_VALIDATION',
    'string.max': 'NAME_MAX_VALIDATION',
    'string.pattern.base': 'NAME_NUMERIC_NOT_ALLOWED',
  })
  .required(),
  email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: false } })
  .min(6)
  .max(50)
  .pattern(/^[^\s]+$/)
  .messages({
    'any.required': 'EMAIL_REQUIRED',
    'string.empty': 'EMAIL_REQUIRED',
    'string.email': 'VALID_EMAIL_ALLOWED',
    'string.min': 'EMAIL_MIN_VALIDATION',
    'string.max': 'EMAIL_MAX_VALIDATION',
    'string.pattern.base': 'EMAIL_FORMAT_INVALID',
    'string.pattern': 'SPACES_NOT_ALLOWED_IN_EMAIL',
  })
  .required(),  


  password: Joi.string()  
    .min(6)
    .label('Password')
    .required(),
  contact : Joi.string()
  .min(10)
  .max(10)
});

const userOrderSchema = Joi.object({

  contactPerson: Joi.string()
    .min(2)
    .max(50)
    .pattern(/^[^\s]+$/)
    .messages({
      'any.required': 'CONTACT_PERSON_NAME_REQUIRED',
      'string.empty': 'CONTACT_PERSON_NAME_REQUIRED',
      'string.min': 'CONTACT_PERSON_NAME_MIN_VALIDATION',
      'string.max': 'CONTACT_PERSON_NAME_MAX_VALIDATION',
      'string.pattern.base': 'CONTACT_PERSON_NAME_FORMAT_INVALID',
      'string.pattern': 'SPACES_NOT_ALLOWED_IN_CONTACT_PERSON_NAME',
    })
    .required(),

  contactNumber: Joi.string()
    .min(10)
    .max(10)
    .pattern(/^[0-9]+$/)
    .messages({
      'any.required': 'CONTACT_NUMBER_REQUIRED',
      'string.empty': 'CONTACT_NUMBER_REQUIRED',
      'string.min': 'CONTACT_NUMBER_MIN_VALIDATION',
      'string.max': 'CONTACT_NUMBER_MAX_VALIDATION',
      'string.pattern.base': 'CONTACT_NUMBER_FORMAT_INVALID',
    })
    .required(),

  deliveryAddress: Joi.string()
    .min(5)
    .max(100)
    .messages({
      'any.required': 'DELIVERY_ADDRESS_REQUIRED',
      'string.empty': 'DELIVERY_ADDRESS_REQUIRED',
      'string.min': 'DELIVERY_ADDRESS_MIN_VALIDATION',
      'string.max': 'DELIVERY_ADDRESS_MAX_VALIDATION',
    })
    .required(),

  billAmount: Joi.number()
    .min(0)
    .messages({
      'any.required': 'BILL_AMOUNT_REQUIRED',
      'number.min': 'BILL_AMOUNT_MIN_VALIDATION',
    })
    .required(),
});

export default {
  userProfileUpdateSchema,
  userLoginUpdateSchema,
  userOrderSchema
};
