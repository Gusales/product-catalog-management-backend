export class RestaurantAlreadyExistsError extends Error {
  constructor() {
    super('This restaurant already exists.')
  }
}
