import  Axios  from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './ChangeExperience.css'
function ChangeExperience(){

    const {id} = useParams();
    const {idExperience} = useParams();
    const [experience,setExperience] = useState();
    const [newCrowdness,setNewCrowdness] = useState(0);
    const [newTime,setNewTime] = useState();
    const [newDuration,setNewDuration] = useState(0);
    const [newObservation,setNewObservation] = useState("");
    const navigate = useNavigate();
    const [vehicleName,setVehicleName] = useState('');
    const [transportName,setTransportName] = useState('');
    const [startPointName,setStartPointName] = useState('');
    const [destinationPointName,setDestinationPointName] = useState('');

    
    
      useEffect(()=>{
        Axios.get('http://localhost:7000/api/getExperienceById/'+idExperience).then(response=>{
            setExperience(response.data);
            setVehicleName(response.data[0].vehicleName);
            setTransportName(response.data[0].transportName);
            setStartPointName(response.data[0].startingPointName);
            setDestinationPointName(response.data[0].destinationPointName);
        
        
        })
      })
            
    

    const changeExperience=()=>{
        let experienceChanged = {
            id:experience[0].id,
            vehicleName:experience[0].vehicleName,
            startingPointName:experience[0].startingPointName,
            destinationPointName:experience[0].destinationPointName,
            crowdness:newCrowdness,
            time:newTime,
            duration:newDuration,
            observations:newObservation,
            userId:id

        }
         Axios.put(`http://localhost:7000/api/modifyExperience/`+idExperience,experienceChanged);
         navigate(`/myprofile/${id}/myexperiences`);
         
    }


    // const loadExperience =(event)=>{
    //     event.preventDefault();

    //     Axios.get('http://localhost:7000/api/getExperienceById/'+idExperience).then(response=>{
    //         setExperience(response.data);
    //         console.log(response.data);
            
    //     })
    //     let inputs = document.querySelectorAll('input');
    //     inputs[0].setAttribute('value',experience[0].vehicleName);
    //     inputs[1].setAttribute('value',experience[0].trasnportName);
    //     inputs[2].setAttribute('value',experience[0].startingPointName);
    //     inputs[3].setAttribute('value',experience[0].destinationPointName);
 
    // }


    const deleteExperience=()=>{
        Axios.delete('http://localhost:7000/api/deleteExperience/'+idExperience);
        alert("Experienta stearsa");
    }
    

    return(
        <div className="container">
            <div className="pageTitle title"><span>Update your Experience </span></div>
  
            <h1></h1>
            <h1></h1>
            <div className="secondaryTitle title">Please fill this form to update your experience</div>
            <h1></h1>
            
             <form class="form_change_experience">
             <label  for ="vehicle" className="element_change">vehicle</label>
         <input id= "vehicle" className="element_change" type="text" value={vehicleName} readOnly></input>

         <label className="element_change" for="transport">transport</label>
         <input id="transport" class="element_change" type="text" value={transportName} readOnly></input>

         <label className="element_change" for="starting_point">starting point</label>
         <input id="starting_point" class="element_change" type="text" value={startPointName} readOnly></input>

         <label className="element_change" for="destination_point">destination point</label>
         <input id = "destination_point" className="element_change" type="text" value={destinationPointName} readOnly></input>

         
         <label className="element_change" for="crowdness">crowdness</label>
         <select id="crowdness" className="element_change" onChange={(e)=>{setNewCrowdness(e.target.value)}}>
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
         </select>
         <label className="element_change" for="time">time</label>
         <input className="element_change" id="time" type="time" onChange={(e)=>{setNewTime(e.target.value)}}></input>
         
         <label className="element_change" for="duration">duration</label>
         <input id="duration" className="element_change" type="number" onChange={(e)=>{setNewDuration(e.target.value)}}></input>
         
         <label className="element_change" for="textarea" >observations</label>
         <input id="textarea" className="element_change" type="textarea" onChange={(e)=>{setNewObservation(e.target.value)}}></input>
         {/* <button onClick={loadExperience}>Load</button> */}
         <button class = "btn_change" onClick={changeExperience}>Save</button>
         <button class = "btn_change" onClick={deleteExperience}>Delete</button>
      </form>
        </div>
     
            
    )

}
export default ChangeExperience;