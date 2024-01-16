import express from 'express'
import { createNewRestaurant } from '../controllers/restaurant-controller'

const restaurantRoutes = express.Router()

restaurantRoutes.get('/', (req, res) => {
  return res.send({
    message: 'Hello World',
  })
})
restaurantRoutes.post('/restaurant', createNewRestaurant)

export { restaurantRoutes }
