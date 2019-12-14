const routerCards = require('express').Router();
const { addCard, getCards, deleteCard } = require('../controllers/cards');

routerCards.post('/cards', addCard);

routerCards.get('/cards', getCards);

routerCards.delete('/cards/:id', deleteCard);

module.exports = routerCards;
