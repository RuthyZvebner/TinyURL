import userModel from "../models/userModel.js"

const userController = {
    getList: async (req, res) => {
        try {
            console.log("im here!!!");
            const users = await userModel.find()
            console.log( "users", users)
            res.json({ users })
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    getById: async (req, res) => {
        const userId = req.params.id
        try {
            const user = await userModel.findById(userId)
            console.log({ user })
            res.json({ user })
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    add: async (req, res) => {
        const { idNumber, name, email, password, links } = req.body
        try {
            const newUser = await userModel.create({ idNumber, name, email, password, links })
            res.json({ newUser })
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    update: async (req, res) => {
        const { id } = req.params.id
        try {
            const updateUser = await userModel.findByIdAndUpdate(id, req.body, {
                new: true
            })
            res.json({ updateUser })
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    delete: async (req, res) => {
        const { id } = req.params
        try {
            const deleteUser = await userModel.findByIdAndDelete(id)
            res.json({ deleteUser })
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}
export default userController