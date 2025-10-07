import z from "zod"
import { IAdressUpdateRequest } from "../../useCases/adress/dtos/IAdressUpdateRequest"

export class ZodValidationAdress {
  static validationAdressUpdate(data: IAdressUpdateRequest) {
    const adressSchema = z.object({
      id: z.string().nonempty("Campo obrigatorio"),
      state: z.string().nonempty("Campo obrigatorio"),
      city: z.string().nonempty("Campo obrigatorio"),
      neighbohhod: z.string().nonempty("Campo obrigatorio"),
      publicPlace: z.string().nonempty("Campo obrigatorio"),
      number: z.string().nonempty("Campo obrigatorio"),
    })

    return adressSchema.parse(data)
  }
}
