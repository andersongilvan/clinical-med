import { Adress } from "../generated/prisma"
import { ICreateAdress } from "../useCases/adress/DTO/ICreateAdressDTO"

export interface IAdressRepository {
  create(data: ICreateAdress): Promise<Adress>
}
