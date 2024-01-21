import { Request, Response } from "express"

import axios from "axios"
import { WeatherModel } from "../models/WeatherModel"

const apiKey = process.env.SECRET_KEY_WEATHER

interface WeatherEntry {
  dt_txt: string
  weather: {
    main: string
    description: string
  }[]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
  }
}

export const getWeather = async (req: Request, res: Response) => {
  try {
    const city = req.query.city as string
    const unitsOptions = ["metric", "imperial"]
    const units = unitsOptions.includes(req.query.units as string)
      ? (req.query.units as string)
      : "metric"
    const langOptions = ["pt_br", "en", "es"]
    const lang = langOptions.includes(req.query.lang as string)
      ? (req.query.lang as string)
      : "pt_br"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=${units}`
    const response = await axios.get(apiUrl)

    const weatherData: WeatherModel = {
      main: response.data.weather[0].main,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      thermalSensation: response.data.main.feels_like,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      city: response.data.name,
    }
    res.json(weatherData)
  } catch (error) {
    console.error("Erro ao obter dados meteorológicos:", error)
    res.status(500).send("Erro ao obter dados meteorológicos")
  }
}

export const getForecast = async (req: Request, res: Response) => {
  try {
    const city = req.query.city as string
    const unitsOptions = ["metric", "imperial"]
    const units = unitsOptions.includes(req.query.units as string)
      ? (req.query.units as string)
      : "metric"
    const langOptions = ["pt_br", "en", "es"]
    const lang = langOptions.includes(req.query.lang as string)
      ? (req.query.lang as string)
      : "pt_br"
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=${lang}&units=${units}`
    const response = await axios.get(apiUrl)
    const forecastData = {
      list: (response.data.list as WeatherEntry[]).map((entry) => ({
        date: entry.dt_txt,
        main: entry.weather[0].main,
        description: entry.weather[0].description,
        temp: entry.main.temp,
        thermalSensation: entry.main.feels_like,
        tempMin: entry.main.temp_min,
        tempMax: entry.main.temp_max,
      })),
      city: response.data.city.name,
    }

    res.json(forecastData)
  } catch (error) {
    console.error("Erro ao obter previsões meteorológicas:", error)
    res.status(500).send("Erro ao obter previsões meteorológicas")
  }
}

export const getMoisture = async (req: Request, res: Response) => {
  try {
    const city = req.query.city as string
    const langOptions = ["pt_br", "en", "es"]
    const lang = langOptions.includes(req.query.lang as string)
      ? (req.query.lang as string)
      : "pt_br"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=metric`
    const response = await axios.get(apiUrl)

    const moistureData = {
      humidity: response.data.main.humidity,
    }

    res.json(moistureData)
  } catch (error) {
    console.error("Erro ao obter umidade do ar:", error)
    res.status(500).send("Erro ao obter umidade do ar")
  }
}

export const getWindSpeed = async (req: Request, res: Response) => {
  try {
    const city = req.query.city as string
    const langOptions = ["pt_br", "en", "es"]
    const lang = langOptions.includes(req.query.lang as string)
      ? (req.query.lang as string)
      : "pt_br"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=metric`
    const response = await axios.get(apiUrl)

    const windSpeedData = {
      windSpeedValue: response.data.wind.speed,
    }

    res.json(windSpeedData)
  } catch (error) {
    console.error("Erro ao obter velocidade do vento:", error)
    res.status(500).send("Erro ao obter velocidade do vento")
  }
}
