import { Request, Response, NextFunction } from "express"
import { FindAlDoctorsUseCase } from "./FinsdAllDoctorUseCase"

export class FindAllDoctorsController {
  constructor(private findAllDoctorsUseCase: FindAlDoctorsUseCase) {}

  handle = async (request: Request, response: Response, next: NextFunction) => {
    const name = request.query.name as string

    console.log("name -> ", name)

    try {
      const result = await this.findAllDoctorsUseCase.excute(name)

      return response.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
}
