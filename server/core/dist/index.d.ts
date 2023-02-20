declare class User {
    name: string;
    email: string;
    id: number;
}

interface IUserRepository {
    create(user: User): Promise<boolean>;
    find(id: number): Promise<User>;
}

declare class UCUser {
    userRepo: IUserRepository;
    constructor(userRepo: IUserRepository);
    find(id: number): Promise<User>;
    create(name: string, email: string): Promise<boolean>;
}

declare class Post {
    author: User | null;
    content: string;
    updateAt: Date;
    createdAt: Date;
    title: string;
    id: number;
}

interface IPostRepository {
    create(post: Post): Promise<boolean>;
    find(id: number): Promise<Post>;
    update(post: Post): Promise<boolean>;
    delete(post: Post): Promise<boolean>;
    findMany(options: {
        authorId: number;
    }): Promise<Post[]>;
}

declare class UCPost {
    postRepo: IPostRepository;
    userRepo: IUserRepository;
    constructor(postRepo: IPostRepository, userRepo: IUserRepository);
    create(title: string, content: string, authorId: number): Promise<boolean>;
    find(postId: number): Promise<Post>;
    update(postId: number, options: {
        title?: string;
        content?: string;
    }): Promise<boolean>;
    delete(postId: number, userId: number): Promise<boolean>;
    findByAuthor(authorId: number): Promise<Post[]>;
}

export { IPostRepository, IUserRepository, Post, UCPost, UCUser, User };
