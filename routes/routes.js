const express = require("express");
const router = express.Router();
const {getAllVehicles , postVehicle} = require('../controllers/vehicle');
const {getAllTransports , getAllTransportsByVehicle , postTransport} = require('../controllers/transport');
const {postStation , getAllStations , getAllStationsByTransport} = require('../controllers/station')
const { postUser,
        getAllUsers,
        getUserById,
        getUserByUserName,
        updateUser,
        updatePassword} = require('../controllers/user');

const { postExperience,
        getAllExperiences,
        getAllExperiencesByUserId,
        modifyExperience,
        deleteExperience} = require('../controllers/experience');

//route pt Vehicle

router.post('/postVehicle' , postVehicle);
router.get('/getAllVehicles' , getAllVehicles);

//route pt Trnsport

router.post('/postTransport' , postTransport);
router.get('/getAllTransports' , getAllTransports);
router.get('/getAllTransportsByVehicle/:id' , getAllTransportsByVehicle );


//route pt stations
router.post('/postStation' , postStation);
router.get('/getAllStations' , getAllStations);
router.get('/getAllStationsByTransport/:id' , getAllStationsByTransport);


//route pt User
router.post('/postUser' , postUser);
router.get('/getAllUsers' , getAllUsers);
router.get('/getUserById/:id' , getUserById);
router.get('/getUserByUserName/:username' , getUserByUserName);
router.put('/updateUser/:id' , updateUser);
router.put('/updateUserPassword/:id' , updatePassword);


//route pt Experience
router.post('/postExperience' , postExperience);
router.get('/getAllExperiences' , getAllExperiences);
router.get('/getExperienceByUserId/:id' , getAllExperiencesByUserId);
router.put('/modifyExperience/:id' ,modifyExperience )
router.delete('/deleteExperience/:id' , deleteExperience);


module.exports = router;


