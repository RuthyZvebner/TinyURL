import linkModel from "../models/linkModel.js";
import userModel from "../models/userModel.js";

const LinkController = {
    getList: async (req, res) => {
        try {
            const links = await linkModel.find()
            res.json({ links })
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    getById: async (req, res) => {
        try {
            const link = await linkModel.findById(req.params.id)
            if (!link)
                res.status(400).json({ message: 'Link not found' })
            link.clicks.push({ipAddress:req.ip})

            await link.save()
            
            res.redirect(link.originUrl)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    add: async (req, res) => {
        const { originUrl, userId } = req.body
        //אם לא קבל את כל הפרמטרים
        if (!originUrl || !userId)
            return res.status(400).json({ message: 'Missing url or user id' })
        try {
            const user = await userModel.findById(userId).populate('links')
            console.log(user._id)

            if (!user)
                return res.status(400).json({ message: 'User not found' })

            const existUrl = user.links.find(link => link.originUrl === originUrl)

            if (existUrl)
                return res.json(`http://localhost:3000/links/${existUrl._id}`)

            const newLink = await linkModel.create({ originUrl })
            user.links.push(newLink)
            //console.log(user.links)
            await user.save()

            const shortUrl = `${req.protocol}://${req.get('host')}/links/${newLink._id}`
            return res.json(shortUrl)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
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
            res.status(400).json({ message: e.message })
        }
    },

    delete: async (req, res) => {
        const { id } = req.params
        try {
            const deleteLink = await linkModel.findByIdAndDelete(id)
            res.json({ deleteLink })
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}

export default LinkController