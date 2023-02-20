import Router from "@koa/router";
import { UCPost } from "core";
import { UserRepository } from "../user/user.repo";
import { PostRepository } from "./post.repo";

export const postRouter = new Router({
  prefix: "/post",
});

postRouter.get("/:id", async (ctx, next) => {
  try {
    const service = new UCPost(new PostRepository(), new UserRepository());
    if (ctx.params.id) {
      const u = await service.find(+ctx.params.id);
      ctx.response.body = JSON.stringify(u);
    }
  } catch (e) {
    ctx.throw(400, "some error on get post", e.message);
  }
  await next();
});

postRouter.get("/", async (ctx, next) => {
  try {
    const service = new UCPost(new PostRepository(), new UserRepository());
    if (ctx.params.id) {
      const u = await service.findByAuthor(+ctx.query.authorId);
      ctx.response.body = JSON.stringify(u);
    }
  } catch (e) {
    ctx.throw(400, "some error on get post", e.message);
  }
  await next();
});

postRouter.patch("/:id", async (ctx, next) => {
  try {
    const service = new UCPost(new PostRepository(), new UserRepository());
    const dto = ctx.request.body as Partial<CreatePostDto>;
    if (ctx.params.id) {
      const u = await service.update(+ctx.params.id, dto);
      ctx.response.body = JSON.stringify(u);
    }
  } catch (e) {
    ctx.throw(400, "some error on get post", e.message);
  }
  await next();
});

postRouter.delete("/:id", async (ctx, next) => {
  try {
    const service = new UCPost(new PostRepository(), new UserRepository());
    if (ctx.params.id) {
      const u = await service.delete(+ctx.params.id, +ctx.query.userId);
      ctx.response.body = JSON.stringify(u);
    }
  } catch (e) {
    ctx.throw(400, "some error on get post", e.message);
  }
  await next();
});

//
interface CreatePostDto {
  title: string;
  content: string;
  authorId: number;
}

postRouter.post("/", async (ctx, next) => {
  try {
    const dto = ctx.request.body as CreatePostDto;
    const service = new UCPost(new PostRepository(), new UserRepository());
    const u = await service.create(dto.title, dto.content, dto.authorId);
    if (u) {
      ctx.body = JSON.stringify({
        code: 200,
        msg: "success",
      });
    } else {
      ctx.throw(400, "some error on create post", { data: dto });
    }
  } catch (e) {
    ctx.throw(400, "some error on create post", e.message);
  }

  await next();
});
