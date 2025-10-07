import { prisma } from "../../../prisma"
import { PostgresRepositoryAdress } from "../../../repositories/implementations/PostgresRepository.adress"

import { CreateAdressController } from "./CreateAdressController"
import { CreateAdressUseCase } from "./CreateAdressUseCase"

const adressRepository = new PostgresRepositoryAdress(prisma)

const createAdressUseCase = new CreateAdressUseCase(adressRepository)

const createAdressController = new CreateAdressController(createAdressUseCase)

export { createAdressController }
