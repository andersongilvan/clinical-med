import { DoctorMapper } from "../../../mappers/DoctorMapper"
import { IDoctorRepository } from "../../../repositories/IDoctorRepository"
import { IDoctorResponse } from "../DTO/IDoctorResponse"

export class FindAlDoctorsUseCase {
  constructor(private doctorsRepository: IDoctorRepository) {}

  async excute(name?: string): Promise<IDoctorResponse[]> {
    const result = await this.doctorsRepository.finAll(name)

    return result.map((d) => {
      return DoctorMapper.toDoctorResponse(d)
    })
  }
}
