const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
    try {
        // Obtém o token de autenticação do cabeçalho HTTP
        const token = req.headers.authorization;

        const secret = process.env.JWT_SECRET;

        // Decodifica o token de autenticação e verifica se a chave secreta é válida
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Busca o usuário no banco de dados com base no ID armazenado no token
        const user = await User.findByPk(decodedToken.userId);

        // Verifica se o usuário foi encontrado no banco de dados
        if (!user) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        // Adiciona o ID do usuário e suas permissões à requisição
        req.user = user;
        // req.userId = decodedToken.userId;
        // req.permissions = decodedToken.permissions;

        // Chama o próximo middleware
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports = authMiddleware;
