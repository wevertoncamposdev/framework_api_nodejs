module.exports = (router) => {
    const loginController = require('../controllers/loginController');

    router
        .get('/login', loginController.index)
        .post('/login', loginController.login)
        .post('/login', loginController.logout)
    return router;
}
