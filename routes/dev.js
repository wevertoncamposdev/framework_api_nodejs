module.exports = (router, sequelize) => {
    router.get('/adm/database', (req, res) => {

        if (req.query.password === '5648' && req.query.prop) {
            sequelize.sync().then((connect) => {
                const db = connect[req.query.prop];
                if (req.query.prop === 'connectionManager' || req.query.prop === 'dialect' || req.query.prop === 'queryInterface') {
                    res.json('not exist command');
                } else {
                    res.json(db);
                }
    
            });
        } else {
            res.redirect('/');
        }
    });

    return router;
}



