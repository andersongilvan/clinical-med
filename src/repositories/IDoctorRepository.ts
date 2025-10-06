import { Doctor } from "../generated/prisma"
import { DoctorWithAdress } from "../generated/types/DoctorWithAdress"
import { IRequestDoctor } from "../useCases/doctors/DTO/IRequestDoctor"

export interface IDoctorRepository {
  create(data: IRequestDoctor): Promise<Doctor>
  findByUsername(username: string): Promise<Doctor | null>
  findById(id: string): Promise<DoctorWithAdress | null>
}
