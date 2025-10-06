import exprees from "express"
import { routes } from "./routes"
import { errorHandle } from "./utils/errorHandle/ErrorHandle"

const app = exprees()

app.use(exprees.json())

app.use(routes)

app.use(errorHandle)

export { app }