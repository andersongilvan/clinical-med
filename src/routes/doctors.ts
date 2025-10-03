import { Router } from "express"
import { createDoctorController } from "../useCases/doctors/CreateDoctors"

const doctorRoutes = Router()

doctorRoutes.post("/", createDoctorController.handle)

export { doctorRoutes }
