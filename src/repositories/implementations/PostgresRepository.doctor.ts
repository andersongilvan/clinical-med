
import { Doctor, PrismaClient } from "../../generated/prisma"
import { IRequestDoctor } from "../../useCases/doctors/DTO/IRequestDoctor"
import { IDoctorRepository } from "../IDoctorRepository"

export class PostgresDoctorRepository implements IDoctorRepository {
  constructor(private pirsma: PrismaClient) {}

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

  create(data: IRequestDoctor): Promise<Doctor> {
    return this.pirsma.doctor.create({
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
