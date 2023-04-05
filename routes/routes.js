module.exports = (express, sequelize) => {
  const router = express.Router();

  // Definindo rotas
  const routes = [
    { path: '/adm', handler: require('./dev')(router, sequelize)},
    { path: '/user', handler: require('./users')(router) },
    { path: '/trash', handler: require('./trash')(router) },
    { path: '/login', handler: require('./login')(router) },
    { path: '/', handler: (req, res) => res.json({ response: 'main' }) }
  ];
  
  routes.forEach(({ path, handler }) => router.use(path, handler));

  return router;
}
