import { Prisma } from "../prisma"

export type DoctorWithAdress = Prisma.DoctorGetPayload<{
  include: { adress: true }
}>
