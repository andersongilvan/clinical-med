export class UsernameAlreadyExsistException extends Error {
  constructor(readonly stastusCode: number = 409) {
    super("Username already exsists")
  }
}
