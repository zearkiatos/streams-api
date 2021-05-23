const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/db.json');
const middlewares = jsonServer.defaults();
const { config } = require('./config');

server.use(middlewares);
server.use(router);
server.use((req, res, next) => {
 if (isAuthorized(req)) {
   next()
 } else {
   res.sendStatus(401)
 }
});
server.listen(config.PORT, () => {
  console.log('JSON Server is running 🤖')
});