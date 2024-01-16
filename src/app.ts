import express from 'express'
import { restaurantRoutes } from './http/routes/restaurant-routes'

export const app = express()

app.use(express.json())

app.use(restaurantRoutes)
