import { CreateDoctorUseCase } from "./CreateDoctorsUseCase"
import { Request, Response, NextFunction } from "express"

export class CreateDoctorController {
  constructor(private createDoctorUseCase: CreateDoctorUseCase) {}

  handle = async (request: Request, response: Response, next: NextFunction) => {
    const { name, username, password, crm, speciality, adressId } = request.body

    try {
      const result = await this.createDoctorUseCase.execute({
        name,
        username,
        password,
        crm,
        speciality,
        adressId,
      })

      return response.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }
}
