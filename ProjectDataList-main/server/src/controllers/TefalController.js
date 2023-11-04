const { Tefal } = require('../models')

module.exports = {
    //get all
    async index(req, res) {
        try {
            const tefals = await Tefal.findAll()
            res.send(tefals)
        } catch (err) {
            res.status(500).send({
                error: 'the Tefals information was incorrect'
            })
        }
    },


    // create
    async create(req, res) {
        try {
            const tefal = await Tefal.create(req.body)
            res.send(tefal.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Tefal incorrect'
            })
        }
    },

    // edit
    async put(req, res) {
        try {
            await Tefal.update(req.body, {
                where: {
                    id: req.params.tefalId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Tefal incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const tefal = await Tefal.findOne({
                where: {
                    id: req.params.tefalId
                }
            })
            if (!tefal) {
                return res.status(403).send({
                    error: 'The Tefal information was incorrect'
                })
            }
            await tefal.destroy()
            res.send(tefal)
        } catch (err) {
            res.status(500).send({
                error: 'The Tefal information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const tefal = await Tefal.findByPk(req.params.tefalId)
            res.send(tefal)
        } catch (err) {
            res.status(500).send({
                error: 'The Tefal information was incorrect'
            })
        }
    },
}
