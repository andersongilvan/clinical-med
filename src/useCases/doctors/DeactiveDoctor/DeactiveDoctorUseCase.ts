import { IDoctorRepository } from "../../../repositories/IDoctorRepository"
import { ResourseNotFoundException } from "../../../utils/exceptions/ResourseNotFoudException"

export class DeactiveDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute(id: string) {
    const doctorExists = await this.doctorRepository.findById(id)

    if (!doctorExists) {
      throw new ResourseNotFoundException("Doctor not found")
    }

    await this.doctorRepository.deactive(id)
  }
}
