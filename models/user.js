const user = (sequelize,DataTypes)=>
sequelize.define('user',{
    uuid:{
        type:DataTypes.STRING(100),
       
    },
    username:{
        type:DataTypes.STRING(100),
        unique:true,
        primaryKey:true,
        allowNull:false,

    },
    password:{
        type:DataTypes.STRING,

    },
    
})

module.exports = user;