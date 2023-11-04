const { height155up } = require('../models')

module.exports = {
    //get all
    async index(req, res) {
        try {
            const height155ups = await height155up.findAll()
            res.send(height155ups)
        } catch (err) {
            res.status(500).send({
                error: 'the height155up information was incorrect'
            })
        }
    },


    // create
    async create(req, res) {
        try {
            const height155up = await height155up.create(req.body)
            res.send(height155up.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create height155up incorrect'
            })
        }
    },

    // edit
    async put(req, res) {
        try {
            await height155up.update(req.body, {
                where: {
                    id: req.params.height155upId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update height155up incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const height155up = await height155up.findOne({
                where: {
                    id: req.params.xiaomiId
                }
            })
            if (!height155up) {
                return res.status(403).send({
                    error: 'The height155up information was incorrect'
                })
            }
            await height155up.destroy()
            res.send(height155up)
        } catch (err) {
            res.status(500).send({
                error: 'The height155up information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const height155up = await height155up.findByPk(req.params.height155upId)
            res.send(height155up)
        } catch (err) {
            res.status(500).send({
                error: 'The height155up information was incorrect'
            })
        }
    },
}
