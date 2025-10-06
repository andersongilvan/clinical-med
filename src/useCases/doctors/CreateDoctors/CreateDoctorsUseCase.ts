import { IRequestDoctor } from "../DTO/IRequestDoctor"
import z from "zod"

import { hash } from "bcryptjs"
import { IDoctorRepository } from "../../../repositories/IDoctorRepository"
import { UsernameAlreadyExsistException } from "../../../exceptions/USernameAlreadyExistException"
import { DoctorMapper } from "../../../mappers/DoctorMapper"

export class CreateDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute(data: IRequestDoctor) {
    // Validar os dados

    const doctorRequestSchema = z.object({
      name: z.string().nonempty("Campo obrigatírio"),
      username: z.string().nonempty("Campo obrigatírio"),
      password: z.string().nonempty("Campo obrigatírio"),
      crm: z.string().nonempty("Campo obrigatírio"),
      speciality: z.enum([
        "CARDIOLOGIA",
        "GINECOLOGIA",
        "PEDIATRIA",
        "ORTOPEDIA",
      ]),
      adressId: z.string().nonempty("Campo obrigatírio"),
    })

    doctorRequestSchema.parse(data)

    // verificar se o username já está cadastrado

    const usernameExists = await this.doctorRepository.findByUsername(
      data.username,
    )

    if (usernameExists) {
      throw new UsernameAlreadyExsistException()
    }

    // encriptar a senha

    const hashPass = await hash(data.password, 8) 

    data.password = hashPass

    // salvar no banco de dados

    const doctorCreated = await this.doctorRepository.create(data)

    const doctor = await this.doctorRepository.findById(doctorCreated.id)

    return DoctorMapper.toDoctorResponse(doctor!)
  }
}
