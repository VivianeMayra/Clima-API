import express from "express"
import dotenv from "dotenv"
dotenv.config()

import weatherRoutes from "./routes/weatherRoutes"

const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Bem-vindo ao Clima-API!")
})

app.use("/weather", weatherRoutes)

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`)
})
