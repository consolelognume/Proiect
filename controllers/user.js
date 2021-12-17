const User = require('../models/users');

const postUser = async(req,res)=> {
    try{

        const user = await User.create(req.body);
        return res.status(200).json(user);

    }catch(err){
        res.status(500).json({message:"postUser problem"});
    }
}

const getAllUsers = async(req,res) => {
    try{
        const users = await User.findAll();
        return res.status(200).json(users);

    }catch(err){
        return res.status(500).json({message:"getAllUsers problem"})
    }
}


const getUserById = async(req,res) => {
    try{
        const idReq = req.params.id;
        const user = await User.findAll({
            where: {
                id:  idReq
            }
        });
        return res.status(200).json(user);


    }catch(err){
        return res.status(500).json({message:"getUserById problem"});
    }
}


const getUserByUserName = async(req,res) => {
    try{
        const userNameReq = req.params.username;
        const user = await User.findAll({
            where: {
                username:  userNameReq
            }
        });
        return res.status(200).json(user);


    }catch(err){
        return res.status(500).json({message:"getUserByUserName problem"});
    }
}

const updateUser = async(req,res) => {
    try {
        const result = await User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName

        }, {
            where: {
                id: req.params.id
            }
        })
        return res.status(200).send(result);

    }catch(err){
        return res.status(500).json({message:"updateUser problem"});
    }
}

const updatePassword = async(req,res)=> {
    try{
        const newPassword = req.body.password;
        const idReq = req.params.id
        const result = await User.update({
            password: newPassword
        },{
            where: {
                id: idReq
            }
        })
        return res.status(200).send(result);

    }catch(err){
        res.status(500).json({message:"updatePassword error"});
    }
}

module.exports = {
    postUser,
    getAllUsers,
    getUserById,
    getUserByUserName,
    updateUser,
    updatePassword

}






