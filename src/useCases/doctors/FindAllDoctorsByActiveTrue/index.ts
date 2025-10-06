import { prisma } from "../../../prisma"
import { PostgresDoctorRepository } from "../../../repositories/implementations/PostgresRepository.doctor"
import { FindDoctorsByActiveTrueController } from "./FindAllDoctorsByActiveTrueController"

import { FindDoctorsByActiveTrueUsecase } from "./FindAllDoctorsByActiveTrueUseCase"

const doctorRepository = new PostgresDoctorRepository(prisma)

const findDoctorsByActiveTrueUseCase = new FindDoctorsByActiveTrueUsecase(
  doctorRepository,
)

const findDoctorsByActiveTrueController = new FindDoctorsByActiveTrueController(
  findDoctorsByActiveTrueUseCase,
)

export { findDoctorsByActiveTrueController }
