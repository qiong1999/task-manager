const Koa = require('koa2');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const http = require('http');

// 在main.js中引入路由
const { userRouter } = require('./routers/user');
const app = new Koa();
app.use(bodyParser());
app.use(
  cors({
    origin: function (ctx) {
      return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 10,
    crdentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  })
);

// 注册userRouter
// 记得不要链式调用，把这两个参数依次传入app.use中
app.use(userRouter.routes(), userRouter.allowedMethods());
app.listen(3000);
