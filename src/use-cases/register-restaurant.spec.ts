import { describe, expect, it, beforeEach } from 'vitest'
import { InMemoryRestaurantRepository } from '../repositories/in-memory/in-memory-restaurant-repository'
import { RegisterRestaurantUseCase } from './register-restaurant'
import { RestaurantAlreadyExistsError } from './errors/restaurant-already-exists-error'

let restaurantRepository: InMemoryRestaurantRepository
let sut: RegisterRestaurantUseCase

describe('Register restaurant use case', () => {
  beforeEach(() => {
    restaurantRepository = new InMemoryRestaurantRepository()
    sut = new RegisterRestaurantUseCase(restaurantRepository)
  })

  it('Should be able to register new restaurant', async () => {
    const { restaurant } = await sut.execute({
      name: 'AnotaAi',
    })

    expect(restaurant.id).toEqual(expect.any(String))
  })

  it('Should not be able to register two restaurantes with same name', async () => {
    await sut.execute({
      name: 'AnotaAi',
    })

    expect(
      async () => await sut.execute({ name: 'AnotaAi' }),
    ).rejects.toBeInstanceOf(RestaurantAlreadyExistsError)
  })
})
