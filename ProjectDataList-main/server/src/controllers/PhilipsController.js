const { Philips } = require('../models')

module.exports = {

    async index(req, res) {
        try {
            const philipss = await Philips.findAll()
            res.send(philipss)
        } catch (err) {
            res.status(500).send({
                error: 'The Philips information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const philips = await Philips.create(req.body)
            res.send(philips.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Philips incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Philips.update(req.body, {
                where: {
                    id: req.params.philipsId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Philips incorrect'
            })
        }

    },

    async delete(req, res) {
        try {
            const philips = await Philips.findOne({
                where: {
                    id: req.params.philipsId
                }
            })
            if (!philips) {
                return res.status(403).send({
                    error: 'The Philips information was incorrect'
                })
            }
            await philips.destroy()
            res.send(philips)
        } catch (err) {
            res.status(500).send({
                error: 'The Philips information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const philips = await Philips.findByPk(req.params.philipsId)
            res.send(philips)
        } catch (err) {
            res.status(500).send({
                error: 'The Philips information was incorrect'
            })
        }
    },

    

}