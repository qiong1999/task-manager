const jwt = require('jsonwebtoken');
const {user} = require('../../models');


module.exports = {
    loginController:async (ctx)=>{
       
        // console.log(ctx.request.body.username&&ctx.request.body.password)
        if(ctx.request.body.username&&ctx.request.body.password){
           const person = await user.findOne({where:{username:ctx.request.body.username}});
            
           if(person!==null){
                const token = jwt.sign({token:person.dataValues.uuid},'uuid')
                ctx.body = {success:true,token:token}
            }else{
                ctx.body = {success:false}
            }
            
        }else{
            ctx.body ={success:false}
        }
    }
}