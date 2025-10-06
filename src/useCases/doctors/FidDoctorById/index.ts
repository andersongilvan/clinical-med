import { prisma } from "../../../prisma"
import { PostgresDoctorRepository } from "../../../repositories/implementations/PostgresRepository.doctor"
import { FindDoctorByIdController } from "./FindDoctorByIdController"
import { FindDoctorByIdUseCase } from "./FindDoctorByIdUseCase"

const doctorRepository = new PostgresDoctorRepository(prisma)

const findDoctorByIdUseCase = new FindDoctorByIdUseCase(doctorRepository)

const findDoctorByIdController = new FindDoctorByIdController(
  findDoctorByIdUseCase,
)

export { findDoctorByIdController }
