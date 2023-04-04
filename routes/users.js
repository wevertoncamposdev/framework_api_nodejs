module.exports = (router) => {
    const userController = require('../controllers/usersController');

    router
        .get('/user', userController.index)
        .get('/user/show', userController.show)
        .post('/user', userController.create)
        .put('/user', userController.update)
        .delete('/user', userController.delete)

    return router;
}