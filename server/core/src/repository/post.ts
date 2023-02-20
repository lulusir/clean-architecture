import { Post } from "../domain/post";

export interface IPostRepository {
  create(post: Post): Promise<boolean>;

  find(id: number): Promise<Post>;

  update(post: Post): Promise<boolean>;

  delete(post: Post): Promise<boolean>;

  findMany(options: { authorId: number }): Promise<Post[]>;
}
