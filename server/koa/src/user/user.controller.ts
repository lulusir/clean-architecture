import Router from "@koa/router";
import { UCUser } from "core";
import { UserRepository } from "./user.repo";

export const userRouter = new Router({
  prefix: "/user",
});

userRouter.get("/:id", async (ctx, next) => {
  try {
    const service = new UCUser(new UserRepository());
    if (ctx.params.id) {
      const u = await service.find(+ctx.params.id);
      ctx.response.body = JSON.stringify(u);
    }
  } catch (e) {
    ctx.throw(400, "some error on get user", e.message);
  }
  await next();
});

//
interface CreateDto {
  name: string;
  email: string;
}

userRouter.post("/", async (ctx, next) => {
  try {
    const dto = ctx.request.body as CreateDto;
    const service = new UCUser(new UserRepository());
    const u = await service.create(dto.name, dto.email);
    if (u) {
      ctx.body = JSON.stringify({
        code: 200,
        msg: "success",
      });
    } else {
      ctx.throw(400, "some error on create user", { data: dto });
    }
  } catch (e) {
    ctx.throw(400, "some error on create user", e.message);
  }

  await next();
});
