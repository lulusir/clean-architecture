import { User } from "./user";

export class Post {
  author: User | null = null;
  content: string = "";
  updateAt: Date = new Date(); // timestamp;
  createdAt: Date = new Date(); // timestamp;
  title: string = "";
  id: number = -1;
}
