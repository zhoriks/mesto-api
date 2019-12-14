const routerUsers = require('express').Router();
const { addUser, getUsers, getUser } = require('../controllers/users');

routerUsers.post('/users', addUser);

routerUsers.get('/users', getUsers);

routerUsers.get('/users/:id', getUser);

module.exports = routerUsers;
