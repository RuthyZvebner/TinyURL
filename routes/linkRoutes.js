import express from 'express'
import LinkController from '../controllers/linkController.js'

const LinksRouter = express.Router()

LinksRouter.get("/", LinkController.getList)
LinksRouter.get("/:id", LinkController.getById)
LinksRouter.post("/", LinkController.add)
LinksRouter.put("/:id", LinkController.update)
LinksRouter.delete("/:id", LinkController.delete)

export default LinksRouter

