export class EmailAlreadyExistException extends Error {
  constructor(readonly stastusCode: number = 409) {
    super("Email already exsists")
  }
}
