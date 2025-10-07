import { Adress } from "../generated/prisma"
import { IAdressUpdateRequest } from "../useCases/adress/dtos/IAdressUpdateRequest"
import { ICreateAdress } from "../useCases/adress/dtos/ICreateAdressDTO"

export interface IAdressRepository {
  create(data: ICreateAdress): Promise<Adress>
  update(data : IAdressUpdateRequest) : Promise<void>
  findById(id : string) : Promise<Adress | null>
}
