import { PrismaRestaurantRepository } from '../../repositories/prisma/prisma-restaurant-repository'

import { RegisterRestaurantUseCase } from '../register-restaurant'

export function makeRegisterRestaurantUseCase() {
  const restaurantRepository = new PrismaRestaurantRepository()
  const registerRestaurantUseCase = new RegisterRestaurantUseCase(
    restaurantRepository,
  )

  return registerRestaurantUseCase
}
