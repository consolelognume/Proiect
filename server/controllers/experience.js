const { where } = require('sequelize/dist');
const Experience = require('../models/experience');

const postExperience = async(req,res) => {
    try{

        const newExperience = await Experience.create(req.body);
        return res.status(200).json(newExperience);

    }catch(err){
        res.status(500).json({message:"postExperience problem"})
    }
}

const getAllExperiences = async(req,res) => {
    try{
        const experiences = await Experience.findAll();
        return res.status(200).json(experiences);

    }catch(err){
        res.status(500).json({message:"getAllExperience problem"})
    }
}


const getAllExperiencesByUserId = async(req,res) => {
    try{
        const id = req.params.id;
        const experiences = await Experience.findAll({
            where: {
                userId:  id
            }
        });
    
        res.status(200).send(experiences);


    }catch(err){
        return res.status(500).json({message:"getAllExperiencesByUserId problem"});
    }
}


const modifyExperience = async(req,res) => {
    try {
        const result = await Experience.update({
            time: req.body.time,
            duration: req.body.duration,
            observations:req.body.observations,
            crowdness:req.body.crowdness

        }, {
            where: {
                id: req.params.id
            }
        })
        return res.status(200).send(result);

    }catch(err){
        return res.status(500).json({message:"modifyExperience problem"});
    }
}


const deleteExperience = async(req,res) => {
    try{
        const result = await Experience.destroy({
            where:{
                id:req.params.id
            }
        });
        return res.status(200).json({message:"Stergere efectuata cu succes"});

    }catch(err){
        return res.status(500).json({message:"DeleteExperience Error"});
    }


}



module.exports = {
    postExperience,
    getAllExperiences,
    getAllExperiencesByUserId,
    modifyExperience,
    deleteExperience};