const express = require('express');
const routerUsers = require('./routes/users.js');
const routerCards = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/', routerUsers);
app.use('/', routerCards);
app.use('/', (req, res) => {
  res.status(404);
  res.send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {});
