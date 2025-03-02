import { messaging } from "@pushnotifications-service/firebase"
import { ApiError } from "@pushnotifications-service/utils"

export const sendNotificationService = async ({ title, body, token }) => {
  const message = {
    notification: {
      title,
      body,
    },
    token: token,
  }

  try {
    const response = await messaging.send(message, true)
    console.log("Successfully simulated message:", response)
    return response
  } catch (error) {
    console.error("FCM Error:", error)
    if (error.code === "messaging/invalid-registration-token") {
      throw new ApiError(400, "Invalid device token provided")
    } else {
      throw new ApiError(500, `FCM Error: ${error.message}`)
    }
  }
}
