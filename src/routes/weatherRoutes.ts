import express from "express"
import {
  getWeather,
  getForecast,
  getMoisture,
  getWindSpeed,
} from "../controllers/weatherController"

const router = express.Router()

router.get("/current", getWeather)
router.get("/forecast", getForecast)
router.get("/moisture", getMoisture)
router.get("/windspeed", getWindSpeed)

export default router
