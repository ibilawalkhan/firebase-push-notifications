import {
  asyncHandler,
  ApiResponse,
  ApiError,
} from "@pushnotifications-service/utils"
import { notificationSchema } from "@pushnotifications-service/validations"
import { sendNotificationService } from "../services/index.js"

export const sendNotificationController = asyncHandler(async (req, res) => {
  const { title, body, token } = req.body

  if (!title || !body || !token) {
    throw new ApiError(400, "Title, body and token are required")
  }

  const { error } = notificationSchema.validate({ title, body, token })
  if (error) {
    throw new ApiError(400, error.details[0].message)
  }

  const response = await sendNotificationService({ title, body, token })

  return res
    .status(200)
    .json(new ApiResponse(200, response, "Notification sent successfully"))
})
