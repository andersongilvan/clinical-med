import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod"
import { EmailAlreadyExistException } from "../exceptions/EmailAlreadyexistException"
import { UsernameAlreadyExsistException } from "../exceptions/USernameAlreadyExistException"

export function errorHandle(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (error instanceof ZodError) {
    const errorList = error._zod.def.map((e) => {
      return {
        field: e.path.join(),
        message: e.message,
      }
    })

    return response.status(400).json(errorList)
  }

  if (error instanceof EmailAlreadyExistException) {
    return response.status(error.stastusCode).json({message : error.message})
  }

  if (error instanceof UsernameAlreadyExsistException) {
    return response.status(error.stastusCode).json({message : error.message})
  }

  next()
}
