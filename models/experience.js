const { DataTypes } = require("sequelize/dist");
const sequelize = require("../sequelize");

const Experience = sequelize.define(
    "Experience",
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        vehicleId: {
            type: DataTypes.INTEGER 
        },
        transportId: {
            type: DataTypes.INTEGER 
        },
        startingPointId: {
            type: DataTypes.INTEGER 

        },
        destinationPointId:{
            type: DataTypes.INTEGER
        },
        crowdness: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        time: {
            type:DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        observations: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type:DataTypes.INTEGER
        }


    }
)

module.exports = Experience