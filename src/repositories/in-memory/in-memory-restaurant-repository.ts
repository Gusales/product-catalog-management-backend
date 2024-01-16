import { Prisma, Restaurant } from '@prisma/client'
import { RestaurantRepository } from '../restaurant-repository'
import { randomUUID } from 'crypto'

export class InMemoryRestaurantRepository implements RestaurantRepository {
  public Restaurants: Restaurant[] = []

  async create(data: Prisma.RestaurantCreateInput) {
    const restaurant = {
      id: randomUUID(),
      name: data.name,
    }

    this.Restaurants.push(restaurant)

    return restaurant
  }

  async findByName(name: string) {
    const restaurant = this.Restaurants.find((item) => item.name === name)

    if (!restaurant) {
      return null
    }

    return restaurant
  }
}
