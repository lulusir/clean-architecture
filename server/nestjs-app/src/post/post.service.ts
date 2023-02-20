import { Injectable } from '@nestjs/common';
import { UCPost } from 'core';
import { UserRepository } from 'src/user/user.repository';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService extends UCPost {
  constructor(public repo: PostRepository, public userRepo: UserRepository) {
    super(repo, userRepo);
  }
}
