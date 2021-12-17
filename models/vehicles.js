const { DataTypes } = require("sequelize/dist");
const sequelize = require("../sequelize");

const Vehicle = sequelize.define(
    "Vehicle",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true
            
        },
        vehicleName: {
            type:DataTypes.STRING
        }
    }
)

module.exports = Vehicle