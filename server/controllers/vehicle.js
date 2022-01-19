
const Vehicle = require("../models/vehicles");

const getAllVehicles = async(req,res) => {
    try{
        const vehicles = await Vehicle.findAll();
        return res.status(200).json(vehicles);

    }catch(err){
        return res.status(500).json({message:"getAllVehcivles problem"})
    }
}

const postVehicle = async(req,res) => {
    try {
        const newVehicle = await Vehicle.create(req.body);
        return res.status(200).json(newVehicle);
    }catch(err){
        return res.status(500).json({message:"ceva"})
    }
}


const deleteVehicle = async(req,res) => {
    try{
        const result = await Vehicle.destroy({
            where:{
                id:req.params.id
            }
        });
        return res.status(200).json({message:"Stergere efectuata cu succes"});

    }catch(err){
        return res.status(500).json({message:"DeleteVehicle Error"});
    }


}



module.exports = {getAllVehicles , postVehicle, deleteVehicle};

