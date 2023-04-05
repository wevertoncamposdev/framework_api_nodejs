module.exports = (router) => {
    const userController = require('../controllers/usersController');

    router
        .get('/users', userController.index)
        .get('/users/show', userController.show)
        .post('/users', userController.create)
        .put('/users', userController.update)
        .delete('/users', userController.destroy)

    return router;
}
