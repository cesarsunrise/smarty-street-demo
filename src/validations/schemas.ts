import Joi from 'joi';

export const addressSchema = Joi.object().keys({
  addresses_to: Joi.string().required(),
  address1: Joi.string().required(),
  address2: Joi.string().required(),
  city: Joi.string().required(),
  province_name: Joi.string().required(),
  country_name: Joi.string().required(),
  postal_code: Joi.string().required(),
});
