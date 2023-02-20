import Router from "@koa/router";
import Koa from "koa";
import { userModule } from "./user";
import { postModule } from "./post";
import { koaBody } from "koa-body";

const app = new Koa();

const router = new Router();

app.use(koaBody());

app
  .use(userModule.router.routes())
  .use(postModule.router.routes())
  .use(router.allowedMethods());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err: any) {
    ctx.status = err?.statusCode || err?.status || 500;
    ctx.body = {
      message: err?.message,
    };
  }
});

app.listen(3000);
console.log("listen to 3000");
