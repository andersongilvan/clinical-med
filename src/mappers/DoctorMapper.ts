import { DoctorWithAdress } from "../generated/types/DoctorWithAdress"
import { IDoctorResponse } from "../useCases/doctors/DTO/IDoctorResponse"

export class DoctorMapper {
  static toDoctorResponse(doctor: DoctorWithAdress): IDoctorResponse {
    return {
      id: doctor.id,
      name: doctor.name,
      username: doctor.username,
      crm: doctor.crm,
      speciality: doctor.speciality,
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
}
