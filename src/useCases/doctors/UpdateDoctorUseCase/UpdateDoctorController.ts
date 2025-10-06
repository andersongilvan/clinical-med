import { Request, Response, NextFunction } from "express"
import { UpdateDoctorUseCase } from "./UpdateDoctorUseCase"
import { DoctorMapper } from "../../../mappers/DoctorMapper"

export class UpdateDoctorController {
  constructor(private updateDoctorUseCase: UpdateDoctorUseCase) {}

  handle = async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params
    const { username, crm } = request.body

    const doctorRequest = DoctorMapper.toDoctorUpdateRequest(id, username, crm)

    try {
      await this.updateDoctorUseCase.execute(doctorRequest)

      return response.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}
