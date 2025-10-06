import { Request, Response, NextFunction } from "express"
import { DeactiveDoctorUseCase } from "./DeactiveDoctorUseCase"

export class DeactiveDoctorController {
  constructor(private deactiveDoctorUseCase: DeactiveDoctorUseCase) {}

  handle = async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params

    try {
      await this.deactiveDoctorUseCase.execute(id)
      return response.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}
