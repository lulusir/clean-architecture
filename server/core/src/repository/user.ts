import { User } from "../domain/user";

export interface IUserRepository {
  create(user: User): Promise<boolean>;
  find(id: number): Promise<User>;
}
