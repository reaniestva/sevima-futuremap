const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const multer = require("multer")

const authRouter = require("./routes/auth")

dotenv.config()

const app = express()
const PORT = process.env.port || 8000

app.use(cors())
app.use(express.json())
app.use(multer().none())
app.use(express.urlencoded({ extended:true }))

app.use("/auth", authRouter)

app.get("/", (req, res) => {
  res.json({
    message: "Futuremap is running",
    port: PORT,
  })
})

app.listen(PORT, () => {
  console.log("Futuremap is running")
  console.log(`Server: http://localhost:${PORT}`)
})