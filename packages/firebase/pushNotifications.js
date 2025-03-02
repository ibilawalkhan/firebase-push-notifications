import admin from "firebase-admin"
import serviceAccount from "../../src/config/firebase.config.json" assert { type: "json" }

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const messaging = admin.messaging()
export { messaging }
