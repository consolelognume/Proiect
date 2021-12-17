const Transport = require('../models/transports');

const getAllTransports = async(req,res) => {
    try{
        const transports = await Transport.findAll();
        return res.status(200).json(transports);

    }catch(err){
        return res.status(500).json({message:"getAllTransports problem"})
    }
}

const getAllTransportsByVehicle = async(req,res) => {
    try{
        const id = req.params.id;
        const transports = await Transport.findAll({
            where: {
                vehcileId:  id
            }
        });
        return res.status(200).json(transports);


    }catch(err){
        return res.status(500).json({message:"getAllTransportsByVehicle problem"});
    }
}

const postTransport = async(req,res) => {
    try{

        const transport = await Transport.create(req.body);
        return res.status(200).json(transport);

    }catch(err){
        return res.status(500).json({message:"postTransport problem"});
    }
}

module.exports = {getAllTransports , getAllTransportsByVehicle , postTransport};


 
