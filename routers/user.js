const koarouter = require('koa-router');
const { registerController } = require('../controllers/users/register');
// router 要用require进来的koarouter实例化
// 需要new才有用
const router = new koarouter();

router.post('/', registerController);

// 把文件里的router重命名为userRouter导出出去
// 在其他文件中就可以用 const { userRouter } = require('./routers/user)
// 的方式引入
module.exports = { userRouter: router };
