import { prisma } from "../../../prisma"

import { CreateDoctorUseCase } from "./CreateDoctorsUseCase"
import { CreateDoctorController } from "./CreateDoctorsController"
import { PostgresDoctorRepository } from "../../../repositories/implementations/PostgresRepository.doctor"

const postgreDoctorRepository = new PostgresDoctorRepository(prisma)

const createDoctorUseCase = new CreateDoctorUseCase(postgreDoctorRepository)

const createDoctorController = new CreateDoctorController(createDoctorUseCase)

export { createDoctorController }
