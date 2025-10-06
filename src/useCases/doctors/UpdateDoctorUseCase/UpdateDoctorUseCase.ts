import { IDoctorRepository } from "../../../repositories/IDoctorRepository"
import { ResourseNotFoundException } from "../../../utils/exceptions/ResourseNotFoudException"
import { ZodValidatorClass } from "../../../utils/Validator/ZodValidatorClass"
import { IUpdateDoctorRequest } from "../DTO/IUpdateDoctorRequest"

export class UpdateDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute(data: IUpdateDoctorRequest) {
    // validar os dados
    const dataValidated = ZodValidatorClass.validateUpdateDoctor(data)

    // verificar se o id existe
    const doctorExists = await this.doctorRepository.findById(dataValidated.id)

    if (!doctorExists) {
      throw new ResourseNotFoundException("Doctor not found")
    }

    await this.doctorRepository.update(data)
  }
}
