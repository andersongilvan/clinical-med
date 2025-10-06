export interface IDoctorWithAdressResponse {
  id: string
  name: string
  username: string
  crm: string
  speciality: string
  active: boolean
  address: {
    id: string
    state: string
    city: string
    neighbohhod: string
    publicPlace: string
    number: string
  }
}
