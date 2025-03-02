import dotenv from "dotenv"
dotenv.config()
import { app } from "./app.js"

const PORT = 9000

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running at port : ${process.env.PORT || PORT}`)
})
