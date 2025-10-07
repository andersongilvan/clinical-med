import { IAdressRepository } from "../../../repositories/IAdressRepository"
import { ResourseNotFoundException } from "../../../utils/exceptions/ResourseNotFoudException"
import { ZodValidationAdress } from "../../../utils/Validator/ZodValidationAdress"
import { IAdressUpdateRequest } from "../dtos/IAdressUpdateRequest"

export class UpdateAdressUseCase {
  constructor(private adressRepository: IAdressRepository) {}

  async execute(data: IAdressUpdateRequest) {
    // validar os dados
    ZodValidationAdress.validationAdressUpdate(data)
    // verificar se o id existe
    const adressExists = await this.adressRepository.findById(data.id)
    if (!adressExists) {
      throw new ResourseNotFoundException("This adress not found")
    }

    await this.adressRepository.update(data)
  }
}
