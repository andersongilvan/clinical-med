import { Doctor } from "../generated/prisma"
import { DoctorWithAdress } from "../generated/types/DoctorWithAdress"
import { IRequestDoctor } from "../useCases/doctors/dtos/IRequestDoctor"
import { IUpdateDoctorRequest } from "../useCases/doctors/dtos/IUpdateDoctorRequest"

export interface IDoctorRepository {
  create(data: IRequestDoctor): Promise<Doctor>
  findByUsername(username: string): Promise<Doctor | null>
  findById(id: string): Promise<DoctorWithAdress | null>
  finAll(name?: string): Promise<Doctor[]>
  findAllByActiveTrue(): Promise<Doctor[]>
  update(data: IUpdateDoctorRequest): Promise<void>
  deactive(id: string): Promise<void>
}
