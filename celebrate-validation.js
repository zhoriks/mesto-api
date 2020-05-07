const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const validSignUp = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
    avatar: Joi.required(),
    about: Joi.string().min(2).max(30),
  }),
});

const validSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validUserId = celebrate({
  params: Joi.object().keys({
    id: Joi.objectId(),
  }),
});

const validCardDeleteId = celebrate({
  params: Joi.object().keys({
    id: Joi.objectId(),
  }),
});

const validCardCreate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required(),
  }),
});

module.exports = {
  validSignUp, validSignIn, validUserId, validCardDeleteId, validCardCreate,
};
