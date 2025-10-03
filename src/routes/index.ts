import { Router } from "express"
import { adressRoutes } from "./adress"
import { doctorRoutes } from "./doctors"

const routes = Router()

routes.use("/adress", adressRoutes)
routes.use("/doctors", doctorRoutes)

export { routes }
