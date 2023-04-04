const db = require('../models');

class UserController {

    async index(req, res) {
        const data = await db.User.findAll();
        res.status(200).json(data);
    }
    async show(req, res) {
        const keys = Object.keys(req.query);
        if (!keys[0]) {
            res.status(500).json('Insira um valor para pesquisa!');
        }
        const data = await db.User.findOne({ where: { [keys[0]]: req.query[keys[0]] } });
        if (!data) {
            res.status(500).json('Usuário não encontrado!');
        }
        res.status(200).json(data);
    }
    async create(req, res) {
        const userId = req.params.id;
        res.json(`User Create`);
    }
    async update(req, res) {
        const userId = req.params.id;
        res.json(`User Update`);
    }
    async delete(req, res) {
        const userId = req.params.id;
        res.json(`User Delete`);
    }
}

module.exports = new UserController();