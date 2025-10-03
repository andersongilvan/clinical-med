import exprees from "express"
import { routes } from "./routes"

const app = exprees()

app.use(exprees.json())

app.use(routes)


export { app }