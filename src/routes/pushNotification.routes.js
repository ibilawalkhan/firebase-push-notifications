import express from "express"
import { sendNotificationController } from "../controllers/index.js"

const router = express.Router()

router.post("/send-notification", sendNotificationController)

export default router
