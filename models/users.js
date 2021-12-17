const { DataTypes } = require("sequelize/dist");
const sequelize = require("../sequelize");

const User = sequelize.define(
    "Users",
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            unique:true

        },
        username:{
            type:DataTypes.STRING,
            allowNull: false,
        
            
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull: false
        },
       

    }
)

module.exports = User;