import { prisma } from "../../../prisma"
import { PostgresRepositoryAdress } from "../../../repositories/implementations/PostgresRepository.adress"
import { UpdateAdressController } from "./UpdateAdressController"
import { UpdateAdressUseCase } from "./UpdateAdressUseCase"

const adressRepository = new PostgresRepositoryAdress(prisma)

const updateAdressUseCase = new UpdateAdressUseCase(adressRepository)

const updateAdressController = new UpdateAdressController(updateAdressUseCase)

export { updateAdressController }
