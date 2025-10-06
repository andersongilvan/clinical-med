import { prisma } from "../../../prisma"
import { PostgresDoctorRepository } from "../../../repositories/implementations/PostgresRepository.doctor"
import { DeactiveDoctorController } from "./DeactiveDoctorController"
import { DeactiveDoctorUseCase } from "./DeactiveDoctorUseCase"

const doctorRepository = new PostgresDoctorRepository(prisma)

const deactiveDoctorUseCase = new DeactiveDoctorUseCase(doctorRepository)

const deactiveDoctorController = new DeactiveDoctorController(
  deactiveDoctorUseCase,
)

export { deactiveDoctorController }
