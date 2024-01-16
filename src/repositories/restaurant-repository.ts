import { Prisma, Restaurant } from '@prisma/client'

export interface RestaurantRepository {
  create: (data: Prisma.RestaurantCreateInput) => Promise<Restaurant>
  findByName: (name: string) => Promise<Restaurant | null>
}
