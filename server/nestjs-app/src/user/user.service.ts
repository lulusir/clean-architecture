import { Injectable } from '@nestjs/common';
import { UCUser } from 'core';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends UCUser {
  constructor(public userRepo: UserRepository) {
    super(userRepo);
  }
}
