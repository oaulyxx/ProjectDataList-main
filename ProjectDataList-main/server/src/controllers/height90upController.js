const { height90up } = require('../models')

module.exports = {
    //get all
    async index(req, res) {
        try {
            const height90ups = await height90up.findAll()
            res.send(height90ups)
        } catch (err) {
            res.status(500).send({
                error: 'the height90ups information was incorrect'
            })
        }
    },


    // create
    async create(req, res) {
        try {
            const height90up = await height90up.create(req.body)
            res.send(height90up.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create height90up incorrect'
            })
        }
    },

    // edit
    async put(req, res) {
        try {
            await height90up.update(req.body, {
                where: {
                    id: req.params.height90upId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update height90up incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const height90up = await height90up.findOne({
                where: {
                    id: req.params.height90upId
                }
            })
            if (!height90up) {
                return res.status(403).send({
                    error: 'The height90up information was incorrect'
                })
            }
            await height90up.destroy()
            res.send(height90up)
        } catch (err) {
            res.status(500).send({
                error: 'The height90up information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const height90up = await height90up.findByPk(req.params.height90upId)
            res.send(height90up)
        } catch (err) {
            res.status(500).send({
                error: 'The height90up information was incorrect'
            })
        }
    }, 
}
