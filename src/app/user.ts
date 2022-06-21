export class User {
  public userName: string;
  public userEmail: string;
  public select: string;

  constructor(userName: string, userEmail: string, select: string) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.select = select;
  }
}
