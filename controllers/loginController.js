const { where } = require('sequelize');
const { User }= require('../models');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class loginController {

    /**
     * Retornar todos os resultados encontrados
     * @param req
     * @param res
     * @returns res.json(data)
     */
    async index(req, res) {
        res.status(200).json('login');
    }

    /**
    * Create data
    * @param req
    * @param res
    * @returns res.json(data)
    */
    async login(req, res) {

        // Recupera as credenciais do usuário a partir da requisição { var, var} Destruction
        const { email, password } = req.body;

        // Busca o usuário com o e-mail fornecido no banco de dados
        const user = await User.findOne({ where: { email } });

        // Se o usuário não for encontrado, retorna uma resposta de erro
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Verifica se a senha fornecida pelo usuário é válida
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Gera um token de autenticação para o usuário
        const token = jwt.sign({ userId: user.id, permissions: user.permissions }, process.env.JWT_SECRET);

        // Retorna uma resposta com o token de autenticação
        return res.json({ token });
    }

    /**
     * Update data
     * @param req
     * @param res
     * @returns boolean
     */
    async logout(req, res) {
        if (Object.keys(req.body).length === 0) {
            return res.status(404).json('Insira um valores para criar!');
        };

        const data = await db.User.update(req.body, { where: { id: req.body.id } })
        res.json(data);
    }
}

module.exports = new loginController();