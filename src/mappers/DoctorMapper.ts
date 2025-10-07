import { Doctor } from "../generated/prisma"
import { DoctorWithAdress } from "../generated/types/DoctorWithAdress"
import { IDoctorWithAdressResponse } from "../useCases/doctors/dtos/IDoctorWithAdressResponse"
import { IDoctorResponse } from "../useCases/doctors/dtos/IDoctorResponse"
import { IUpdateDoctorRequest } from "../useCases/doctors/dtos/IUpdateDoctorRequest"

export class DoctorMapper {
  static toDoctorWitAdressResponse(
    doctor: DoctorWithAdress,
  ): IDoctorWithAdressResponse {
    return {
      id: doctor.id,
      name: doctor.name,
      username: doctor.username,
      crm: doctor.crm,
      speciality: doctor.speciality,
      active: doctor.active,
      address: {
        id: doctor.adressId,
        state: doctor.adress.state,
        city: doctor.adress.city,
        neighbohhod: doctor.adress.neighbohhod,
        publicPlace: doctor.adress.publicPlace,
        number: doctor.adress.number,
      },
    }
  }

  static toDoctorResponse(doctor: Doctor): IDoctorResponse {
    return {
      id: doctor.id,
      name: doctor.name,
      username: doctor.username,
      crm: doctor.crm,
      speciality: doctor.speciality,
      active: doctor.active,
      adressId: doctor.adressId,
    }
  }

  static toDoctorUpdateRequest(
    id: string,
    username: string,
    crm: string,
  ): IUpdateDoctorRequest {
    return {
      id,
      username,
      crm,
    }
  }
}
