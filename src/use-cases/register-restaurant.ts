import { Restaurant } from '@prisma/client'
import { RestaurantRepository } from '../repositories/restaurant-repository'
import { RestaurantAlreadyExistsError } from './errors/restaurant-already-exists-error'

interface RegisterRestaurantUseCaseRequest {
  name: string
}
interface RegisterRestaurantUseCaseResponse {
  restaurant: Restaurant
}

export class RegisterRestaurantUseCase {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async execute({
    name,
  }: RegisterRestaurantUseCaseRequest): Promise<RegisterRestaurantUseCaseResponse> {
    const isExistsRestaurant = await this.restaurantRepository.findByName(name)

    if (isExistsRestaurant) {
      throw new RestaurantAlreadyExistsError()
    }

    const restaurant = await this.restaurantRepository.create({
      name,
    })

    return { restaurant }
  }
}
