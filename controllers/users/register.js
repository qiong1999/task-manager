const { user } = require("../../models");
function randomString(e){
    e=e||32;
    let t = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    a = t.length;
    n = "";
    for(let i=0;i<e;i++){
        n += t.charAt(Math.floor(Math.random()*a));
        
    }
    return n;
}
module.exports = {
    registerController:async(ctx)=>{
       const {username,password} = ctx.request.body;
       const uuid = randomString(12);
        if(username && password && uuid){
            const person = user.build({uuid,username,password});
            await person.save();
            ctx.body = {success:true};
        }
    }
}
