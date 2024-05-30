import linkModel from "../models/linkModel.js";

const LinkController = {
    getList: async (req, res) => {
        try {
            const links = await linkModel.find()
            res.json({ links })
        }
        catch (e) {
            res.status(400).json({ massage: e.massage })
        }
    },

    getById: async (req, res) => {
        try {
            const link = await linkModel.findById(req.params.id)
            res.json({ link })
        }
        catch (e) {
            res.status(400).json({ massage: e.massage })
        }
    },

    add: async (req, res) => {
        const { originUrl } = req.body
        try {
            const newLink = await linkModel.create({originUrl})
            res.json({ newLink })
        }
        catch (e) {
            res.status(400).json({ massage: e.massage })
        }
    },



    update: async (req, res) => {
        const { id } = req.params
        try {
            const updateLink = await linkModel.findByIdAndUpdate(id, req.bode, {
                new: true
            })
            res.json({ updateLink })
        }
        catch (e) {
            res.status(400).json({ massage: e.massage })
        }
    },

    delete: async (req, res) => {
        const { id } = req.params
        try {
            const deleteLink = await linkModel.findByIdAndDelete(id)
            res.json({ deleteLink })
        }
        catch (e) {
            res.status(400).json({ massage: e.massage })
        }
    }
}

export default LinkController