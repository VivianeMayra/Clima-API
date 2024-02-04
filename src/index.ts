import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import weatherRoutes from "./routes/weatherRoutes"

const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 4000

app.use(cors())

app.get("/", (req, res) => {
  res.send("Bem-vindo ao Clima-API!")
})

app.use("/weather", weatherRoutes)

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`)
})
