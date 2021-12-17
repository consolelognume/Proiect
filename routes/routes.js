const express = require("express");
const router = express.Router();
const Vehicle = require('../models/vehicles');
const {getAllVehicles , postVehicle} = require('../controllers/vehicle');
const {getAllTransports , getAllTransportsByVehicle , postTransport} = require('../controllers/transport');
const {postStation , getAllStations , getAllStationsByTransport} = require('../controllers/station');



//route pt Vehicle

router.post('/postVehicle' , postVehicle);
router.get('/getAllVehicles' , getAllVehicles);

//route pt Transport

router.post('/postTransport' , postTransport);
router.get('/getAllTransports' , getAllTransports);
router.get('/getAllTransportsByVehicle/:id' , getAllTransportsByVehicle );


//route pt stations
router.post('/postStation' , postStation);
router.get('/getAllStations' , getAllStations);
router.get('/getAllStationsByTransport/:id' , getAllStationsByTransport);


module.exports = router;


