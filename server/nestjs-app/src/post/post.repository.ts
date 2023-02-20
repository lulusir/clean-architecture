import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPostRepository, Post } from 'core';
import { UserOrmEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { PostOrmEntity } from './entities/post.entity';

@Injectable()
export class PostRepository implements IPostRepository {
  constructor(
    @InjectRepository(PostOrmEntity)
    private postRepo: Repository<PostOrmEntity>,

    @InjectRepository(UserOrmEntity)
    private userRepo: Repository<UserOrmEntity>,
  ) {}
  async create(post: Post): Promise<boolean> {
    const data = {
      createdAt: new Date(post.createdAt),
      updateAt: new Date(post.updateAt),
      authorId: post.author.id,
      title: post.title,
      content: post.content,
    };
    const r = await this.postRepo.save(data);
    return !!r;
  }

  async find(id: number): Promise<Post> {
    const p = await this.postRepo.findOne({ where: { id } });
    const u = await this.userRepo.findOne({ where: { id: p.authorId } });
    const post: Post = {
      ...p,
      author: u,
    };
    return post;
  }

  async update(post: Post): Promise<boolean> {
    console.log(post, 'post');
    const r = await this.postRepo.update(post.id, {
      title: post.title,
      content: post.content,
    });
    return !!r;
  }

  async delete(post: Post): Promise<boolean> {
    const r = await this.postRepo.delete(post.id);
    return !!r;
  }

  async findMany(options: { authorId: number }): Promise<Post[]> {
    const posts = await this.postRepo.find({
      where: {
        authorId: options.authorId,
      },
    });

    if (posts.length) {
      const u = await this.userRepo.findOne({
        where: { id: options.authorId },
      });
      const res = posts.map((v) => {
        const p = new Post();
        p.author = u;
        p.content = v.content;
        p.createdAt = v.createdAt;
        p.id = v.id;
        p.title = v.title;
        p.updateAt = v.updateAt;
        return p;
      });
      return res;
    }
    return [];
  }
}
