const {Sequelize} = require('sequelize');


//creare conexiune la baza de date
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./sqlite/proiect.db"

});

sequelize.sync({alter: true}).then(()=>{
    console.log("All models were syncronized");
})

module.exports = sequelize;