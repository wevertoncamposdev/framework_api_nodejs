const permissionsMiddleware = (req, res, next) => {

    // verifica se o usuário está autenticado
    if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    if (req.method.toLocaleLowerCase() in req.user.permissions
        && req.user.permissions[req.method.toLocaleLowerCase()] === true) {
        // prossegue para a próxima rota se o usuário tiver as permissões necessárias
        next();
    } else {
        return res.status(403).json({ error: 'Forbidden' });
    }
};

module.exports = permissionsMiddleware;
