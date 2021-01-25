const { user } = require("../../models");

module.exports = async (ctx)=>{
    if(ctx.request.body.username&&ctx.request.body.password){
        const person = user.build(ctx.request.body);
        await person.save()
        ctx.response.body = "success"
        
    }
    
  }
