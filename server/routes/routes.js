const express = require("express");
const router = express.Router();
const {getAllVehicles , postVehicle, deleteVehicle} = require('../controllers/vehicle');
const {getAllTransports , getAllTransportsByVehicle , postTransport,deleteTransport} = require('../controllers/transport');
const {postStation , getAllStations , getAllStationsByTransport, deleteStation} = require('../controllers/station')
const { postUser,
        getAllUsers,
        getUserById,
        getUserByUserName,
        updateUser,
        updatePassword,
        loginUser,
        deleteUser} = require('../controllers/user');

const { postExperience,
        getAllExperiences,
        getAllExperiencesByUserId,
        modifyExperience,
        deleteExperience,
        getExperienceById} = require('../controllers/experience');

//route pt Vehicle

router.post('/postVehicle' , postVehicle);
router.get('/getAllVehicles' , getAllVehicles);
router.delete('/deleteVehicle/:id' , deleteVehicle);

//route pt Trnsport

router.post('/postTransport' , postTransport);
router.get('/getAllTransports' , getAllTransports);
router.get('/getAllTransportsByVehicle/:id' , getAllTransportsByVehicle );
router.delete('/deleteTransport/:id' , deleteTransport);


//route pt stations
router.post('/postStation' , postStation);
router.get('/getAllStations' , getAllStations);
router.get('/getAllStationsByTransport/:id' , getAllStationsByTransport);
router.delete('/deleteStation/:id' , deleteStation);


//route pt User
router.post('/postUser' , postUser);
router.put('/login',loginUser);
router.get('/getAllUsers' , getAllUsers);
router.get('/getUserById/:id' , getUserById);
router.get('/getUserByUserName/:username' , getUserByUserName);
router.put('/updateUser/:id' , updateUser);
router.put('/updateUserPassword/:id' , updatePassword);
router.delete('/deleteUser/:id' , deleteUser);


//route pt Experience
router.post('/postExperience' , postExperience);
router.get('/getAllExperiences' , getAllExperiences);
router.get('/getExperienceByUserId/:id' , getAllExperiencesByUserId);
router.get('/getExperienceById/:id',getExperienceById);
router.put('/modifyExperience/:id' ,modifyExperience )
router.delete('/deleteExperience/:id' , deleteExperience);


module.exports = router;


