import { ICreateAdress } from "../dtos/ICreateAdressDTO"
import z from "zod"
import { IResponseAdressDTO } from "../dtos/IResponseAdressDto"
import { IAdressRepository } from "../../../repositories/IAdressRepository"

export class CreateAdressUseCase {
  constructor(private adressRepository: IAdressRepository) {}

  async execute(data: ICreateAdress) {
    // validar os dados
    const adressSchema = z.object({
      state: z.string().nonempty("Campo obrigatorio"),
      city: z.string().nonempty("Campo obrigatorio"),
      neighbohhod: z.string().nonempty("Campo obrigatorio"),
      publicPlace: z.string().nonempty("Campo obrigatorio"),
      number: z.string().nonempty("Campo obrigatorio"),
    })

    adressSchema.parse(data)

    return (await this.adressRepository.create(data)) as IResponseAdressDTO
  }
}
