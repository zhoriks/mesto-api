const routerUsers = require('express').Router();
const { getUsers, getUser } = require('../controllers/users');
const { validUserId } = require('../celebrate-validation');


routerUsers.get('/users', getUsers);
routerUsers.get('/users/:id', validUserId, getUser);

module.exports = routerUsers;
