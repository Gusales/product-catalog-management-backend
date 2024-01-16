import { Prisma, Restaurant } from '@prisma/client'
import { RestaurantRepository } from '../restaurant-repository'
import { prisma } from '../../lib/prisma'

export class PrismaRestaurantRepository implements RestaurantRepository {
  public Restaurants: Restaurant[] = []

  async create(data: Prisma.RestaurantCreateInput) {
    const restaurant = await prisma.restaurant.create({
      data,
    })

    return restaurant
  }

  async findByName(name: string) {
    const restaurant = await prisma.restaurant.findFirst({
      where: {
        name,
      },
    })

    if (!restaurant) {
      return null
    }

    return restaurant
  }
}
