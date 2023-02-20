import { User } from "../domain/user";
import { IUserRepository } from "../repository/user";

export class UCUser {
  constructor(public userRepo: IUserRepository) {}

  find(id: number) {
    return this.userRepo.find(id);
  }

  create(name: string, email: string) {
    if (email.includes("@test.com")) {
      const user = new User();
      user.email = email;
      user.name = name;
      return this.userRepo.create(user);
    }
    throw Error("Please use legal email");
  }
}
