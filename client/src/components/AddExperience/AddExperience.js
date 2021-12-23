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
    const [vehicleId,setVehicleId] = useState(0);
    const [transports,setTransports] = useState([]);
    let finalTransports = [];
    let vehicleIdForTransport;
    const[vehicleName,setVehicleName] = useState('');


    // Axios.get('http://localhost:7000/api/getAllTransports').then(response=>{
    //       setTransports(response.data);
    //   })
    

    useEffect(()=>{
      Axios.get('http://localhost:7000/api/getAllVehicles').then(response=>{
        
        setVehicles(response.data);
      }) 
      
     

     
     
    })
   
        
    //builders for add experience
    


    const addExperience = (event) => {
      event.preventDefault();

    
    }

    const vehiclesSelect = () => {
      
      
      return vehicles.map(vehicle=>(
        <option>{vehicle.vehicleName}</option>
      ))
    }

    const selectedVehicleOption=(event)=>{
      
      event.preventDefault();
      setVehicleName(event.target.value);
      vehicleIdForTransport = vehicles.filter(vehicle=>vehicle.vehicleName === event.target.value)[0].id;
      
      
      
      

      

      Axios.get('http://localhost:7000/api/getAllTransportsByVehicle/'+vehicles.filter(vehicle=>vehicle.vehicleName === event.target.value)[0].id).then(response=>{
        
        setTransports(response.data);
       
        
        
      });

      finalTransports = transports.filter(transport=>transport.vehcileId === vehicles.filter(vehicle=>vehicle.vehicleName === event.target.value)[0].id);
      console.log(finalTransports);

      // let form = document.getElementById('form');
      // let select = document.createElement('select');
      // for(let transport of finalTransports){
      //   let option = document.createElement('option');
      //   option.innerHTML = transport.transportName;
      //   select.appendChild(option);
      // }
      // form.appendChild(select);
    }

    const transportSelect = () => {

      // Axios.get('http://localhost:7000/api/getAllTransports').then(response=>{
      //   setTransports(response.data);
      // })

      // const finalTransports2 = transports.filter(transport=>transport.vehcileId === vehicleIdForTransport);
      

      return transports.map(transport=>(
        <option>{transport.vehcileId}</option>
      ))

      
      
      
    }

    // const selectTransportsByVehicle = () =>{
    //     Axios.get('http://localhost:7000/api/getAllTransportsByVehicle'+vehicleTemp.id).then(response=>{
    //      setTransports(response.data);
    //    })

    // }
    
    return(
        <div class="wrapper">
           
    <form class="form" id='form'>
      <div className="pageTitle title">Add Experience </div>
      <div className="secondaryTitle title">Please fill this form to add an experience</div>
      <select className="select-vehicle" onChange={selectedVehicleOption}>{vehiclesSelect()}</select>
      <div><select className="select-vehicle" >{transportSelect()}</select></div>
      
      <button className="submit formEntry" onClick={addExperience}>Add</button>
    </form>
  </div>
    )
}

export default AddExperience;