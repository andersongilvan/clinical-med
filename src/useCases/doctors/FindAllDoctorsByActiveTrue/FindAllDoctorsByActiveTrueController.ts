import { Request, Response, NextFunction } from "express"
import { FindDoctorsByActiveTrueUsecase } from "./FindAllDoctorsByActiveTrueUseCase"

export class FindDoctorsByActiveTrueController {
  constructor(
    private findDoctorsByActiveTrueUseCase: FindDoctorsByActiveTrueUsecase,
  ) {}

  handle = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const result = await this.findDoctorsByActiveTrueUseCase.execute()

      return response.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
}
