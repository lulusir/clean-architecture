import { PrismaClient } from "@prisma/client";
import { IUserRepository, User } from "core";

export class UserRepository implements IUserRepository {
  prisma = new PrismaClient();

  async create(user: User): Promise<boolean> {
    const d = await this.prisma.user_orm_entity.create({
      data: {
        email: user.email,
        name: user.name,
      },
    });

    return !!d;
  }

  async find(id: number): Promise<User> {
    const d = await this.prisma.user_orm_entity.findFirst({
      where: {
        id: id,
      },
    });

    if (d) {
      const u = new User();
      u.email = d?.email;
      u.id = d?.id;
      u.name = d?.name;
      return u;
    }
    throw Error("user id " + id + "not found");
  }
}
