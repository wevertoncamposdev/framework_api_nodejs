const { where } = require('sequelize');
const db = require('../models');
const { v4: uuidv4 } = require('uuid');

class TrashController {

    /**
     * Retornar todos os resultados encontrados
     * @param req
     * @param res
     * @returns res.json(data)
     */
    async index(req, res) {

        const keys = Object.keys(req.query);

        if (!keys[0]) {
           return res.status(404).json('Insira um valor para pesquisa!');
        }

        const data = await db.sequelize.query(`
        SELECT * FROM ${req.query.table} where deletedAt IS NOT NULL;`)
        res.status(200).json(data[0]);
    }

    /**
     * Retornar todos os resultados encontrados de acordo com o query.
     * Esta query pode ser dinâmica basta passar a key e o value que a consulta será feita
     * de acordo com a key. 
     * 
     * Ex. se for email='email@email.com' o busca sera feito pela key email
     * 
     * Ex. se for id='02dde7ec-1b4c-471a-8e62-65e08ffa94cd' o busca sera feito pela key id
     * 
     * @param req
     * @param res
     * @returns res.json(data)
     */
    async show(req, res) {
        const keys = Object.keys(req.query);

        if (!keys[0]) {
           return res.status(404).json('Insira um valor para pesquisa!');
        }

        const data = await db.User.findOne({ where: { [keys[0]]: req.query[keys[0]] }, paranoid: false });
        res.status(200).json(data);
    }

    /**
     * Destroy data
     * @param req
     * @param res
     * @returns boolean
     */
    async destroy(req, res) {
        const data = await db.User.destroy({ where: { id: req.body.id }, force: true }) // update body request
        res.json(data);
    }
}

module.exports = new TrashController();