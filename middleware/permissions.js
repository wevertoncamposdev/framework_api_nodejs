const permissionsMiddleware = (req, res, next) => {

    try {
        if (!req.userId) {
            throw new Error('Forbidden');
        }

        if (req.userPermissions.method[req.method.toLocaleLowerCase()] === true) {
            next();
        } else {
            throw new Error('Forbidden');
        }

    } catch (error) {
        res.status(403).json({ error: error.message })
    }
}

module.exports = permissionsMiddleware;