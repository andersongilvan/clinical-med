export interface IDoctorResponse {
  id: string
  name: string
  username: string
  crm: string
  speciality: string
  address: {
    id: string
    state: string
    city: string
    neighbohhod: string
    publicPlace: string
    number: string
  }
}
