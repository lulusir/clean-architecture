import { PrismaClient } from "@prisma/client";
import { IPostRepository, Post } from "core";

export class PostRepository implements IPostRepository {
  prisma = new PrismaClient();

  async create(post: Post): Promise<boolean> {
    const r = await this.prisma.post_orm_entity.create({
      data: {
        authorId: post.author.id,
        content: post.content,
        title: post.title,
        createdAt: post.createdAt,
        updateAt: post.updateAt,
      },
    });

    return !!r;
  }

  async find(id: number): Promise<Post> {
    const r = await this.prisma.post_orm_entity.findFirst({
      where: {
        id: id,
      },
    });
    if (r) {
      const p = new Post();
      p.author = await this.prisma.user_orm_entity.findFirst({
        where: {
          id: r.authorId,
        },
      });
      p.content = r.content;
      p.title = r.title;
      p.createdAt = r.createdAt;
      p.updateAt = r.createdAt;
      p.id = r.id;
      return p;
    }
    throw new Error("some error ");
  }

  async update(post: Post): Promise<boolean> {
    const r = this.prisma.post_orm_entity.update({
      data: {
        title: post.title,
        content: post.content,
      },
      where: {
        id: post.id,
      },
    });
    return !!r;
  }
  async delete(post: Post): Promise<boolean> {
    const r = await this.prisma.post_orm_entity.delete({
      where: {
        id: post.id,
      },
    });
    return !!r;
  }
  async findMany(options: { authorId: number }): Promise<Post[]> {
    const r = await this.prisma.post_orm_entity.findMany({
      where: {
        authorId: options.authorId,
      },
    });
    const author = await this.prisma.user_orm_entity.findFirst({
      where: {
        id: options.authorId,
      },
    });
    return r.map((v) => {
      const p = new Post();
      p.author = author;
      p.content = v.content;
      p.createdAt = v.createdAt;
      p.title = v.title;
      p.updateAt = v.updateAt;
      p.id = v.id;
      return p;
    });
  }
}
