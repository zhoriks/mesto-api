const Card = require('../models/card');
const AuthorisationError = require('../errors/authorisation-error');

module.exports.addCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ card }))
    .catch(next);
};

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ cards }))
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.id)
    .then((card) => {
      if (req.user._id === card.owner.toString()) {
        Card.findByIdAndRemove(req.params.id)
          .then(() => res.send({ message: 'Удалено' }));
      } else {
        throw new AuthorisationError('Нет прав');
      }
    })
    .catch(next);
};
