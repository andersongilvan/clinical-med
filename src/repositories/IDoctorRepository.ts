import { Doctor } from "../generated/prisma"
import { IRequestDoctor } from "../useCases/doctors/DTO/IRequestDoctor"

export interface IDoctorRepository {
  create(data: IRequestDoctor): Promise<Doctor>
  findByUsername(username: string): Promise<Doctor | null>
}
