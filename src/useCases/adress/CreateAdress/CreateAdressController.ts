import { Request, Response, NextFunction } from "express"
import { CreateAdressUseCase } from "./CreateAdressUseCase"

export class CreateAdressController {
  constructor(private createAdressUseCase: CreateAdressUseCase) {}

  handler = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    const { state, city, neighbohhod, publicPlace, number } = request.body

    try {
      const result = await this.createAdressUseCase.execute({
        state,
        city,
        neighbohhod,
        publicPlace,
        number,
      })

      return response.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }
}
