import { Adress, PrismaClient } from "../../generated/prisma"
import { IAdressUpdateRequest } from "../../useCases/adress/dtos/IAdressUpdateRequest"
import { ICreateAdress } from "../../useCases/adress/dtos/ICreateAdressDTO"
import { IAdressRepository } from "../IAdressRepository"

export class PostgresRepositoryAdress implements IAdressRepository {
  constructor(private pirsma: PrismaClient) {}

  async findById(id: string): Promise<Adress | null> {
    return await this.pirsma.adress.findUnique({
      where: { id },
    })
  }

  async update(data: IAdressUpdateRequest): Promise<void> {
    await this.pirsma.adress.update({
      where: { id: data.id },
      data: {
        state: data.state,
        city: data.city,
        neighbohhod: data.neighbohhod,
        publicPlace: data.publicPlace,
        number: data.number,
      },
    })
  }

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
