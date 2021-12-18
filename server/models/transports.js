const { DataTypes } = require("sequelize/dist");
const sequelize = require("../sequelize");

const Transport = sequelize.define(
    "Transport",
    {
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true
        },
        transportName: {
            type:DataTypes.STRING
        },
        vehcileId: {
            type:DataTypes.INTEGER
        }
    },
    {
        timestamps:false
    }
)

module.exports = Transport