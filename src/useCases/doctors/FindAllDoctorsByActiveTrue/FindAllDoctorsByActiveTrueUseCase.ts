import { DoctorMapper } from "../../../mappers/DoctorMapper"
import { IDoctorRepository } from "../../../repositories/IDoctorRepository"

export class FindDoctorsByActiveTrueUsecase {
  constructor(private docotorRespository: IDoctorRepository) {}

  async execute() {
    const result = await this.docotorRespository.findAllByActiveTrue()

    return result.map((d) => {
      return DoctorMapper.toDoctorResponse(d)
    })
  }
}
