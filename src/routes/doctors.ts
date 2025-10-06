import { Router } from "express"
import { createDoctorController } from "../useCases/doctors/CreateDoctors"
import { findAllDoctorsController } from "../useCases/doctors/FindAllDoctors"
import { findDoctorsByActiveTrueController } from "../useCases/doctors/FindAllDoctorsByActiveTrue"
import { findDoctorByIdController } from "../useCases/doctors/FidDoctorById"
import { updateDoctorController } from "../useCases/doctors/UpdateDoctorUseCase"
import { deactiveDoctorController } from "../useCases/doctors/DeactiveDoctor"

const doctorRoutes = Router()

doctorRoutes.post("/", createDoctorController.handle)
doctorRoutes.get("/:id", findDoctorByIdController.handle)
doctorRoutes.get("/", findAllDoctorsController.handle)
doctorRoutes.get("/active", findDoctorsByActiveTrueController.handle)
doctorRoutes.put("/:id", updateDoctorController.handle)
doctorRoutes.delete("/:id", deactiveDoctorController.handle)

export { doctorRoutes }
