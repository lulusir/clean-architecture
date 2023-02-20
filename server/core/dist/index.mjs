class User {
  constructor() {
    this.name = "";
    this.email = "";
    this.id = -1;
  }
}

class UCUser {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }
  find(id) {
    return this.userRepo.find(id);
  }
  create(name, email) {
    if (email.includes("@test.com")) {
      const user = new User();
      user.email = email;
      user.name = name;
      return this.userRepo.create(user);
    }
    throw Error("Please use legal email");
  }
}

class Post {
  constructor() {
    this.author = null;
    this.content = "";
    this.updateAt = new Date();
    // timestamp;
    this.createdAt = new Date();
    // timestamp;
    this.title = "";
    this.id = -1;
  }
}

class UCPost {
  constructor(postRepo, userRepo) {
    this.postRepo = postRepo;
    this.userRepo = userRepo;
  }
  async create(title, content, authorId) {
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
  async find(postId) {
    return this.postRepo.find(postId);
  }
  async update(postId, options) {
    const post = await this.find(postId);
    if (options.content) {
      post.content = options.content;
    }
    if (options.title) {
      post.title = options.title;
    }
    return this.postRepo.update(post);
  }
  async delete(postId, userId) {
    const post = await this.postRepo.find(postId);
    if (post.author?.id === userId) {
      return this.postRepo.delete(post);
    }
    throw Error("Only the current user is the author can delete a post");
  }
  async findByAuthor(authorId) {
    return this.postRepo.findMany({ authorId });
  }
}

export { Post, UCPost, UCUser, User };
