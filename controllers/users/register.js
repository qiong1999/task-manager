const { user } = require('../../models');

// 都要像这样重命名之后再export出去
// 这样在其他的文件中就可以先不引入
// 然后在打registerController这个名字的时候
// 就可以自动联想，然后按下回车就可以自动require
module.exports = {
  registerController: async (ctx) => {
    if (ctx.request.body.username && ctx.request.body.password) {
      const person = user.build(ctx.request.body);
      await person.save();
      ctx.body = { success: true };
    }
  },
};
