const routerUsers = require('express').Router();
const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);
const { getUsers, getUser } = require('../controllers/users');


routerUsers.get('/users', getUsers);
routerUsers.get('/users/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.objectId(),
  }),
}), getUser);

module.exports = routerUsers;
