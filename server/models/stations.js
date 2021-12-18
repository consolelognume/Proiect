const { DataTypes } = require("sequelize/dist");
const sequelize = require("../sequelize");

const Station = sequelize.define(
    "Station",
    {
        id: {
           type:DataTypes.INTEGER,
           primaryKey: true
        },
        stationName: {
            type:DataTypes.STRING
        },
        transportId: {
            type:DataTypes.INTEGER
        }
    },
    {
        timestamps:false
    }
)

module.exports = Station;