import admin from "firebase-admin"
import { service } from "../../src/config/firebase.config.json" assert { type: "json" }

admin.initializeApp({
  credential: admin.credential.cert(service),
})

const messaging = admin.messaging()
export { messaging }
