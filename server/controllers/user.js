const User = require('../models/users');

const postUser = async(req,res)=> {
    try{
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;

        const newUser = {
            username:username,
            password:password,
            email:email,
            firstName:firstName,
            lastName:lastName
        }

        await User.create(newUser);
        return res.status(200).send(newUser);

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
        return res.status(200).send(user);


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

const loginUser = async(req,res)=> {
    

    const user = req.body;
    
    if(user.usernameLog){
        const result = await User.findOne({
            where:{
                username:user.usernameLog
            }
        })

        if(result.password!=user.passwordLog){
            res.status(200).send({message:"Wrong"});
        }else{
            res.status(200).send(result);
        }
    }
}

const deleteUser = async(req,res) => {
    try{
        const result = await User.destroy({
            where:{
                id:req.params.id
            }
        });
        return res.status(200).json({message:"Stergere efectuata cu succes"});

    }catch(err){
        return res.status(500).json({message:"DeleteUser Error"});
    }


}

module.exports = {
    postUser,
    getAllUsers,
    getUserById,
    getUserByUserName,
    updateUser,
    updatePassword,
    loginUser,
    deleteUser

}







