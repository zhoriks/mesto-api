const routerCards = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { addCard, getCards, deleteCard } = require('../controllers/cards');

routerCards.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required(),
  }),
}), addCard);

routerCards.get('/cards', getCards);

routerCards.delete('/cards/:id', deleteCard);

module.exports = routerCards;
