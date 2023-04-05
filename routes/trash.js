module.exports = (router) => {
    const trashController = require('../controllers/trashController');

    router
        .get('/trash', trashController.index)
        .get('/trash/show', trashController.show)
        .delete('/trash', trashController.destroy)
        
    return router;
}
