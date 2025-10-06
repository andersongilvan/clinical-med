import { prisma } from "../../../prisma"
import { PostgresDoctorRepository } from "../../../repositories/implementations/PostgresRepository.doctor"
import { UpdateDoctorController } from "./UpdateDoctorController"
import { UpdateDoctorUseCase } from "./UpdateDoctorUseCase"

const doctorRepository = new PostgresDoctorRepository(prisma)

const updateDoctorUseCase = new UpdateDoctorUseCase(doctorRepository)

const updateDoctorController = new UpdateDoctorController(updateDoctorUseCase)

export { updateDoctorController }
