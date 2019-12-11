const Card = require('../models/card');

module.exports.addCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ cards }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then((cards) => {
      if (!cards) {
        res.status(404).send({ message: 'Карточка не найден' });
        return;
      }
      res.send({ cards });
    })
    .catch(() => res.status(404).send({ message: 'Карточка не найдена' }));
};
