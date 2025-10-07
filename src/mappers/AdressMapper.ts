import { IAdressUpdateRequest } from "../useCases/adress/dtos/IAdressUpdateRequest"

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
}
