import { Doctor, PrismaClient } from "../../generated/prisma"
import { DoctorWithAdress } from "../../generated/types/DoctorWithAdress"
import { IRequestDoctor } from "../../useCases/doctors/dtos/IRequestDoctor"
import { IUpdateDoctorRequest } from "../../useCases/doctors/dtos/IUpdateDoctorRequest"
import { IDoctorRepository } from "../IDoctorRepository"

export class PostgresDoctorRepository implements IDoctorRepository {
  constructor(private pirsma: PrismaClient) {}

  async deactive(id: string): Promise<void> {
    await this.pirsma.doctor.update({
      where: { id },
      data: { active: false },
    })
  }

  async update(data: IUpdateDoctorRequest): Promise<void> {
    await this.pirsma.doctor.update({
      where: {
        id: data.id,
      },
      data: {
        username: data.username,
        crm: data.crm,
      },
    })
  }

  async finAll(name?: string): Promise<Doctor[]> {
    if (name) {
      return await this.pirsma.doctor.findMany({
        where: {
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
        orderBy: {
          name: "asc",
        },
      })
    }

    return await this.pirsma.doctor.findMany()
  }

  async findAllByActiveTrue(): Promise<Doctor[]> {
    return await this.pirsma.doctor.findMany({
      where: {
        active: true,
      },
      orderBy: {
        name: "asc",
      },
    })
  }

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
