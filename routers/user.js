
const router = require("koa-router")();
const Koa = require("koa2");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");

const register = require("../controllers/users/register")

const app = new Koa();
app.use(bodyParser());
app.use(
  cors({
    origin: function (ctx) {
      return "*";
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 10,
    crdentials: true,
    allowMethods: ["GET", "POST", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

router.post("/", register);
app.use(router.routes()).use(router.allowedMethods());
app.listen(3004);

module.export = router