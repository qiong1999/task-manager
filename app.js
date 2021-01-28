const Koa = require("koa2");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const jwt = require("koa-jwt");

//引入路由
const { userRouter } = require("./routers/user");
const app = new Koa();
app.use(jwt({secret:"uuid"}).unless({path:[/^\/register/,/^\/login/]}))
app.use(bodyParser());
app.use(
  cors()
);

app.use(userRouter.routes(),userRouter.allowedMethods());
app.listen(3004)