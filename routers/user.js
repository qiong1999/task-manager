const Router = require('koa-router');
const {registerController} = require('../controllers/users/register');
const {loginController} = require('../controllers/users/login');
const {homeController} = require('../controllers/users/home');
const router = new Router();

router.post('/sign',registerController);
router.post('/login',loginController)
router.post('/home',homeController);
module.exports = {userRouter:router}