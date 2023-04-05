module.exports = (router) => {
    const userController = require('../controllers/usersController');
    const authMiddleware = require('../middleware/auth');
    const permissionsMiddleware = require('../middleware/permissions');

    router
        .get('/users', authMiddleware, permissionsMiddleware, userController.index)
        .get('/users/show', authMiddleware, permissionsMiddleware, userController.show)
        .post('/users', authMiddleware, permissionsMiddleware, userController.create)
        .put('/users', authMiddleware, userController.update)
        .delete('/users', authMiddleware, userController.destroy)

    return router;
}
