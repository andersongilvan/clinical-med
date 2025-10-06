import { prisma } from "../../../prisma"
import { PostgresDoctorRepository } from "../../../repositories/implementations/PostgresRepository.doctor"
import { FindAllDoctorsController } from "./FindAlldoctorsController"
import { FindAlDoctorsUseCase } from "./FinsdAllDoctorUseCase"

const doctorRepository = new PostgresDoctorRepository(prisma)

const findAllDoctorsUseCase = new FindAlDoctorsUseCase(doctorRepository)

const findAllDoctorsController = new FindAllDoctorsController(
  findAllDoctorsUseCase,
)

export { findAllDoctorsController }
