export class ResourseNotFoundException extends Error {
  constructor(
    readonly message: string,
    readonly stastusCode: number = 404,
  ) {
    super(message)
  }
}
