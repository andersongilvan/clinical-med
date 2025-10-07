import { Router } from "express"
import { createAdressController } from "../useCases/adress/CreateAdress"
import { updateAdressController } from "../useCases/adress/UpdateAdress"

const adressRoutes = Router()

adressRoutes.post("/", createAdressController.handler)
adressRoutes.put("/:id", updateAdressController.handle)

export { adressRoutes }
