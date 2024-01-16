import { ZodError, z } from 'zod'
import { Request, Response } from 'express'
import { makeRegisterRestaurantUseCase } from '../../use-cases/factories/make-register-restaurant-use-case'
import { RestaurantAlreadyExistsError } from '../../use-cases/errors/restaurant-already-exists-error'

export async function createNewRestaurant(
  request: Request,
  response: Response,
) {
  const restaurantSchema = z.object({
    name: z.string(),
  })

  try {
    const { name } = restaurantSchema.parse(request.body)

    const registerRestaurant = makeRegisterRestaurantUseCase()
    const { restaurant } = await registerRestaurant.execute({
      name,
    })

    return response.status(201).send({ id: restaurant.id })
  } catch (err) {
    if (err instanceof ZodError) {
      const { errors } = err
      return response.status(400).send({ errors })
    }

    if (err instanceof RestaurantAlreadyExistsError) {
      const { message } = err
      return response.status(409).send({ error: message })
    }
  }
}
