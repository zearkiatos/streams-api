const express = require('express');
const api = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const jsonServer = require('json-server');
const router = jsonServer.router('src/db.json');
const middlewares = jsonServer.defaults();
const { config } = require('./config');

require('http').Server(api);

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(cors());
api.use(morgan('tiny'));
api.use(helmet());

api.use(middlewares);
api.use(router);
api.use((req, res, next) => {
 if (isAuthorized(req)) {
   next()
 } else {
   res.sendStatus(401)
 }
});
api.listen(config.PORT, () => {
  console.log('JSON Server is running 🤖')
});