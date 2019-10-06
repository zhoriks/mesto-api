const routerUsers = require('express').Router();
const users = require('../data/users.json');

routerUsers.get('/users', (req, res) => {
  res.send(users);
});

routerUsers.get('/users/:id', (req, res) => {
  const userSearch = users.filter((element) => element._id === req.params.id);
  if (userSearch.length < 1) {
    res.send({ error: 'Такого пользователя нет' });
    return;
  }
  res.send(userSearch);
});

module.exports = routerUsers;
