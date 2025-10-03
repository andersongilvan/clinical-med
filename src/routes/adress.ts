import { Router } from "express"
import { createAdressController } from "../useCases/adress/CreateAdress"

const adressRoutes = Router()

adressRoutes.post("/", createAdressController.handler)

export { adressRoutes }
