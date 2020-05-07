const routerCards = require('express').Router();
const { addCard, getCards, deleteCard } = require('../controllers/cards');
const { validCardCreate, validCardDeleteId } = require('../celebrate-validation');

routerCards.post('/cards', validCardCreate, addCard);

routerCards.get('/cards', getCards);

routerCards.delete('/cards/:id', validCardDeleteId, deleteCard);

module.exports = routerCards;
