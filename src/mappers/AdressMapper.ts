import { Adress } from "../generated/prisma"
import { IAdressUpdateRequest } from "../useCases/adress/dtos/IAdressUpdateRequest"
import { ICreateAdress } from "../useCases/adress/dtos/ICreateAdressDTO"
import { IResponseAdress } from "../useCases/adress/dtos/IResponseAdressDto"

export class AdressMapper {
  static toUpdateAdressRequest(
    id: string,
    state: string,
    city: string,
    neighbohhod: string,
    publicPlace: string,
    number: string,
  ): IAdressUpdateRequest {
    return {
      id,
      state,
      city,
      neighbohhod,
      publicPlace,
      number,
    }
  }

  static toRequestAdress(
    state: string,
    city: string,
    neighbohhod: string,
    publicPlace: string,
    number: string,
  ): ICreateAdress {
    return {
      state,
      city,
      neighbohhod,
      publicPlace,
      number,
    }
  }

  static toAdressResponse(adress: Adress): IResponseAdress {
    return {
      id: adress.id,
      state: adress.state,
      city: adress.city,
      neighbohhod: adress.neighbohhod,
      publicPlace: adress.publicPlace,
      number: adress.number,
    }
  }
}
