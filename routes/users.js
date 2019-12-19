const routerUsers = require('express').Router();
const { getUsers, getUser } = require('../controllers/users');


routerUsers.get('/users', getUsers);
routerUsers.get('/users/:id', getUser);

module.exports = routerUsers;
