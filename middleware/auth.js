const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
    try {

        // Decodifica o token de autenticação e verifica se a chave secreta é válida
        const decodedToken = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);

        // Busca o usuário no banco de dados com base no ID armazenado no token
        const user = await User.findByPk(decodedToken.userId);

        // Verifica se o usuário foi encontrado no banco de dados
        if (!user) {
            throw new Error('Invalid token');
        }

        // Adiciona o Users e suas permissões à requisição
        req.userId = decodedToken.userId;
        req.userPermissions = decodedToken.permissions

        // Chama o próximo middleware
        next();

    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
}

module.exports = authMiddleware;
