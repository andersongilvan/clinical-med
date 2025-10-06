import { FindDoctorByIdUseCase } from "./FindDoctorByIdUseCase"
import { Request, Response, NextFunction } from "express"

export class FindDoctorByIdController {
  constructor(private finDoctorByIdUseCase: FindDoctorByIdUseCase) {}

  handle = async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params

    console.log("id", id)

    try {
      const result = await this.finDoctorByIdUseCase.execute(id)
      return response.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
}
