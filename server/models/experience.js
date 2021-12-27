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
        vehicleName: {
            type: DataTypes.STRING 
        },
        transportName: {
            type: DataTypes.STRING 
        },
        startingPointName: {
            type: DataTypes.STRING 

        },
        destinationPointName:{
            type: DataTypes.STRING
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


    },
    {
        timestamps:false
    }
)

module.exports = Experience