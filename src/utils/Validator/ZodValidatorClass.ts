import z from "zod"
import { IUpdateDoctorRequest } from "../../useCases/doctors/dtos/IUpdateDoctorRequest"

export class ZodValidatorClass {

  static validateUpdateDoctor(data: IUpdateDoctorRequest) {
    const doctorRequest = z.object({
      id: z.string().nonempty("Campo obrigatírio"),
      username: z.string().nonempty("Campo obrigatírio"),
      crm: z.string().nonempty("Campo obrigatírio"),
    })

    return doctorRequest.parse(data)
  }

}
