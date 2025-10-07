import { Request, Response, NextFunction } from "express"
import { UpdateAdressUseCase } from "./UpdateAdressUseCase"
import { AdressMapper } from "../../../mappers/AdressMapper"

export class UpdateAdressController {
  constructor(private updateAressUseCase: UpdateAdressUseCase) {}

  handle = async (request: Request, response: Response, next: NextFunction) => {
    const { state, city, neighbohhod, publicPlace, number } = request.body
    const { id } = request.params

    try {
      const requestDto = AdressMapper.toUpdateAdressRequest(
        id,
        state,
        city,
        neighbohhod,
        publicPlace,
        number,
      )

      await this.updateAressUseCase.execute(requestDto)

      return response.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}
