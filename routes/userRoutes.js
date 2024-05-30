import express from 'express'
import userController from '../controllers/userController.js'

const UsersRouter = express.Router()

UsersRouter.get("/:id", userController.getById)
UsersRouter.get("/", userController.getList)
UsersRouter.post("/", userController.add)
UsersRouter.put("/:id", userController.update)
UsersRouter.delete("/:id", userController.delete)

export default UsersRouter