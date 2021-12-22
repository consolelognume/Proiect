import React from "react";
import { useState ,useEffect} from "react";
import Axios from "axios";
import {useParams} from 'react-router-dom';
import './AddExperience.css';
import gif from './train.gif'


function AddExperience(){

    const {id} = useParams();

    //experience atributes
    const [vehicles,setVehicles] = useState([]);
    const [transports,setTransports] = useState([]);
    const[vehicleName,setVehicleName] = useState('');

    useEffect(()=>{
      Axios.get('http://localhost:7000/api/getAllVehicles').then(response=>{
        
        setVehicles(response.data);
      }) 
      
      Axios.get('http://localhost:7000/api/getAllTransports').then(response=>{
        setTransports(response.data);
      })

     
     
    })
   
        
    //builders for add experience
    


    const addExperience = (event) => {
      event.preventDefault();

      let vehicleTemp = {
        id:0,
        vehicleName:''
      };
      
      for(let vehicle of vehicles){
        if(vehicle.vehicleName === vehicleName){
            vehicleTemp.vehicleName = vehicle.vehicleName;
            vehicleTemp.id = vehicle.id;
        }
      }
       const experience = {
        vehicleId:vehicleTemp.id
      }

      
      

      // Axios.post('http://localhost:7000/api/postExperience',{

      // })
    }

    const vehiclesSelect = () => {
      
      
      return vehicles.map(vehicle=>(
        <option>{vehicle.vehicleName}</option>
      ))
    }

    const selectedVehicleOption=(event)=>{
      setVehicleName(event.target.value);
    }

    const transportSelect = () => {
      return transports.map(transport=>{
        <option>{transport.id}</option>
      })
      
    }
    
    return(
        <div class="wrapper">
           
    <form class="form">
      <div class="pageTitle title">Add Experience </div>
      <div class="secondaryTitle title">Please fill this form to add an experience</div>
      <select className="select-vehicle" onChange={selectedVehicleOption}>{vehiclesSelect()}</select>
      {/* <select className="select-vehicle" >{transportSelect()}</select> */}
      <button class="submit formEntry" onClick={addExperience}>Add</button>
    </form>
  </div>
    )
}

export default AddExperience;