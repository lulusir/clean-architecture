import { IUserRepository } from "../repository/user";
import { Post } from "../domain/post";
import { IPostRepository } from "../repository/post";

export class UCPost {
  constructor(
    public postRepo: IPostRepository,
    public userRepo: IUserRepository
  ) {}

  async create(title: string, content: string, authorId: number) {
    // business logic
    if (title.length < 10) {
      throw Error("title too short");
    }

    if (content.split(" ").length > 140) {
      throw Error("The maximum limit for post content is 140 words");
    }

    const post = new Post();
    post.title = title;
    post.content = content;
    post.author = await this.userRepo.find(authorId);

    return this.postRepo.create(post);
  }

  async find(postId: number) {
    return this.postRepo.find(postId);
  }

  async update(
    postId: number,
    options: {
      title?: string;
      content?: string;
    }
  ) {
    const post = await this.find(postId);
    if (options.content) {
      post.content = options.content;
    }
    if (options.title) {
      post.title = options.title;
    }
    return this.postRepo.update(post);
  }

  async delete(postId: number, userId: number) {
    // Only the current user is the author can delete a post
    const post = await this.postRepo.find(postId);
    if (post.author?.id === userId) {
      return this.postRepo.delete(post);
    }
    throw Error("Only the current user is the author can delete a post");
  }

  async findByAuthor(authorId: number) {
    return this.postRepo.findMany({ authorId });
  }
}
