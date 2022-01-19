import React from "react";
import { useState ,useEffect} from "react";
import Axios from "axios";
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './AddExperience.css';
import gif from './train.gif'


function AddExperience(){

    const {id} = useParams();

    //experience atributes
    const [vehicles,setVehicles] = useState([]);
    const [transports,setTransports] = useState([]);
    const [stations,setStations] = useState([]);
    const [vehicleName,setVehicleName] = useState('');
    const [transportName,setTransportName] = useState('');
    const [stationName,setStationName] = useState('');
    const [destinationName,setDestinationName] = useState('');
    const [crowdness,setCrowdness] = useState(0);
    const [time,setTime] = useState('');
    const [duration,setDuration] = useState(0);
    const [observation,setObservation] = useState('');
    const navigate = useNavigate();



    useEffect(()=>{
      Axios.get('http://localhost:7000/api/getAllVehicles').then(response=>{
        
        setVehicles(response.data);
      }) 
     })
   
        

    


    const addExperience = (event) => {
      event.preventDefault();
      const newExperience = {
        vehicleName:vehicleName,
        transportName:transportName,
        startingPointName:stationName,
        destinationPointName:destinationName,
        crowdness:crowdness,
        time:time,
        duration:duration,
        observations:observation,
        userId:id


      }
       Axios.post('http://localhost:7000/api/postExperience',newExperience).then(response=>console.log(response.data));
       navigate(`/myprofile/${id}`);

    
    }

    const vehiclesSelect = () => {
      
      
      return vehicles.map(vehicle=>(
        <option>{vehicle.vehicleName}</option>
      ))
    }

    const selectedVehicleOption=(event)=>{
      
      event.preventDefault();
      setVehicleName(event.target.value);
     
      
      Axios.get('http://localhost:7000/api/getAllTransportsByVehicle/'+vehicles.filter(vehicle=>vehicle.vehicleName === event.target.value)[0].id).then(response=>{
        
        setTransports(response.data);
       
        
        
      });

    


    }

    const transportSelect = () => {

      
      
     

      return transports.map(transport=>(
        <option>{transport.transportName}</option>
      ))

      
      
      
    }

    const selectedTransportOption = (event) => {
      event.preventDefault();
      console.log(event.target.value);
      setTransportName(event.target.value);

      Axios.get('http://localhost:7000/api/getAllStationsByTransport/'+transports.filter(transport=>transport.transportName===event.target.value)[0].id).then(response=>{
        setStations(response.data);
      })
      

    }

    const selectedStationOption = (event) => {
      setStationName(event.target.value);
    }

    const stationSelect = () => {
      return stations.map(station=>(
        <option>{station.stationName}</option>
      ))
    }

    const destinationSelect = () => {
      return stations.map(station=>(
        <option>{station.stationName}</option>
      ))
    }

    const selectedDestinationOption = (event) => {
      setDestinationName(event.target.value);
    }

    const selectedCrowdness = (event) => {
      setCrowdness(event.target.value);
    }

    
   const selectedTime = (event) => {
    setTime(event.target.value);
   }

   const selectedDuration = (event) => {
     setDuration(event.target.value);
     
   }

   const selectedObservation = (event) => {
     setObservation(event.target.value);
   }


    
   return(
    <div class="wrapper">

  <div className="pageTitle title"><span>Add Experience </span></div>
  <h1></h1>
  <h1></h1>
  <div className="container2">
  <div className="secondaryTitle title">Please fill this form to add an experience</div>
  <h1></h1>
  <form class="form_add_experience" id='form'>
  <label  for ="vehicle" class="select-vehicle">vehicle</label>
  <select id="vehicle" className="select-vehicle" onChange={selectedVehicleOption}>{vehiclesSelect()}</select>
  <label className="select-vehicle" for="transport">transport</label>
  <select id="transport" className="select-vehicle" onChange={selectedTransportOption}>{transportSelect()}</select>
  <label className="select-vehicle" for="starting_point">starting point</label>
  <select id="starting_point" className="select-vehicle" onChange={selectedStationOption}>{stationSelect()}</select>
  <label className="select-vehicle" for="destination_point">destination point</label>
  <select id="destination_point" className="select-vehicle" onChange={selectedDestinationOption}>{destinationSelect()}</select>
  <label className="select-vehicle" for="crowdness">crowdness</label>
  <select id="crowdness" className="select-vehicle" onChange={selectedCrowdness}>
    <option disabled selected value>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
  <label className="select-vehicle" for="time">time</label>
  <input id="time" className="select-vehicle" type="time" onChange={selectedTime} >
</input>
  <label className="select-vehicle" for="duration">duration</label>
  <input id = "duration" className="select-vehicle" type="number" onChange={selectedDuration}></input>
  <label for="textarea" className="select-vehicle" >observations</label>
  <textarea id="textarea" className="select-vehicle" onChange={selectedObservation}></textarea>
  
  <button className="submit formEntry" onClick={addExperience}>Add</button>
</form>
</div>
</div>
)
}

export default AddExperience;