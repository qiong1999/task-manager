
module.exports = {
    homeController:async(ctx)=>{
        console.log(ctx.request.body);
        ctx.body = "hello"
    }
}