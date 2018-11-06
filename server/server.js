const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const gamesController = require('./controllers/game');

const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

require('./db/db')

app.use('/game', gamesController);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
});
