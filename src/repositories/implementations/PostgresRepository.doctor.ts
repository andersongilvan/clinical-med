import { Doctor, PrismaClient } from "../../generated/prisma"
import { DoctorWithAdress } from "../../generated/types/DoctorWithAdress"
import { IRequestDoctor } from "../../useCases/doctors/DTO/IRequestDoctor"
import { IDoctorRepository } from "../IDoctorRepository"

export class PostgresDoctorRepository implements IDoctorRepository {
  constructor(private pirsma: PrismaClient) {}

  async findById(id: string): Promise<DoctorWithAdress | null> {
    return await this.pirsma.doctor.findFirst({
      where: { id },
      include: {
        adress: true,
      },
    })
  }

  async findByUsername(username: string): Promise<Doctor | null> {
    return await this.pirsma.doctor.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    })
  }

  async create(data: IRequestDoctor): Promise<Doctor> {
    return await this.pirsma.doctor.create({
      data: {
        name: data.name,
        username: data.username,
        password: data.password,
        crm: data.crm,
        speciality: data.speciality,
        adressId: data.adressId,
      },
    })
  }
}
