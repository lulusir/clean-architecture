import { IUserRepository } from 'core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserOrmEntity } from './entities/user.entity';
import { User } from 'core';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserOrmEntity)
    private userDB: Repository<UserOrmEntity>,
  ) {}

  async create(user: User): Promise<boolean> {
    const r = await this.userDB.save({
      email: user.email,
      name: user.name,
    });

    return !!r;
  }

  async find(id: number): Promise<User> {
    const data = await this.userDB.findOne({ where: { id: id } });
    return data;
  }
}
