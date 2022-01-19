const Station = require('../models/stations');

const postStation = async(req,res)=> {
    try{

        const station = await Station.create(req.body);
        return res.status(200).json(station);

    }catch(err){
        res.status(500).json({message:"postStation problem"});
    }
}

const getAllStations = async(req,res) => {
    try{
        const stations = await Station.findAll();
        return res.status(200).json(stations);

    }catch(err){
        return res.status(500).json({message:"getAllStations problem"})
    }
}

const getAllStationsByTransport = async(req,res) => {
    try{
        const id = req.params.id;
        const stations = await Station.findAll({
            where: {
                transportId:  id
            }
        });
        return res.status(200).json(stations);


    }catch(err){
        return res.status(500).json({message:"getAllStationsByTransport problem"});
    }
}

const deleteStation = async(req,res) => {
    try{
        const result = await Station.destroy({
            where:{
                id:req.params.id
            }
        });
        return res.status(200).json({message:"Stergere efectuata cu succes"});

    }catch(err){
        return res.status(500).json({message:"DeleteExperience Error"});
    }


}


module.exports = {postStation , getAllStations , getAllStationsByTransport, deleteStation};

