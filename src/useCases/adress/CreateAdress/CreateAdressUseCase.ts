import { ICreateAdress } from "../dtos/ICreateAdressDTO"


import { IAdressRepository } from "../../../repositories/IAdressRepository"
import { AdressMapper } from "../../../mappers/AdressMapper"
import { ZodValidationAdress } from "../../../utils/Validator/ZodValidationAdress"

export class CreateAdressUseCase {
  constructor(private adressRepository: IAdressRepository) {}

  async execute(data: ICreateAdress) {
    // validar os dados
    ZodValidationAdress.validationAdressCreate(data)

    const result = await this.adressRepository.create(data)

    return AdressMapper.toAdressResponse(result)
  }
}
