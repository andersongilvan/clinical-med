import { prisma } from "../../../prisma"
import { PostgresRepository } from "../../../repositories/implementations/PostgresRepository.adress"
import { CreateAdressController } from "./CreateAdressController"
import { CreateAdressUseCase } from "./CreateAdressUseCase"

const adressRepository = new PostgresRepository(prisma)

const createAdressUseCase = new CreateAdressUseCase(adressRepository)

const createAdressController = new CreateAdressController(createAdressUseCase)

export { createAdressController }
