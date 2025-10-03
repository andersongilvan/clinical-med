import { Adress, PrismaClient } from "../../generated/prisma"
import { ICreateAdress } from "../../useCases/adress/DTO/ICreateAdressDTO"
import { IAdressRepository } from "../IAdressRepository"

export class PostgresRepository implements IAdressRepository {
  constructor(private pirsma: PrismaClient) {}

  async create(data: ICreateAdress): Promise<Adress> {
    return await this.pirsma.adress.create({
      data: {
        city: data.city,
        state: data.state,
        neighbohhod: data.neighbohhod,
        publicPlace: data.publicPlace,
        number: data.number,
      },
    })
  }
}
