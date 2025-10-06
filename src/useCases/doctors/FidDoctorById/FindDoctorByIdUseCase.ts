import { DoctorMapper } from "../../../mappers/DoctorMapper"
import { IDoctorRepository } from "../../../repositories/IDoctorRepository"
import { ResourseNotFoundException } from "../../../utils/exceptions/ResourseNotFoudException"

export class FindDoctorByIdUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute(id: string) {
    // verificar se o id existe no banco de dados
    const doctorExists = await this.doctorRepository.findById(id)

    if (!doctorExists) {
      throw new ResourseNotFoundException("Doctor not found")
    }

    return DoctorMapper.toDoctorWitAdressResponse(doctorExists)
  }
}
