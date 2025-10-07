import { Request, Response, NextFunction } from "express"
import { CreateAdressUseCase } from "./CreateAdressUseCase"
import { AdressMapper } from "../../../mappers/AdressMapper"

export class CreateAdressController {
  constructor(private createAdressUseCase: CreateAdressUseCase) {}

  handler = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    const { state, city, neighbohhod, publicPlace, number } = request.body

    const adressRequest = AdressMapper.toRequestAdress(
      state,
      city,
      neighbohhod,
      publicPlace,
      number,
    )

    try {
      const result = await this.createAdressUseCase.execute(adressRequest)

      return response.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }
}
