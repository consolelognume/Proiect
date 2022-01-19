import  Axios  from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
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
             <form>
         <input type="text" value={vehicleName} readOnly></input>
         <input type="text" value={transportName} readOnly></input>
         <input type="text" value={startPointName} readOnly></input>
         <input type="text" value={destinationPointName} readOnly></input>
         <label for="crowdness">crowdness</label>
         <select onChange={(e)=>{setNewCrowdness(e.target.value)}}>
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
         </select>
         <label for="time">time :</label>
         <input type="time" onChange={(e)=>{setNewTime(e.target.value)}}></input>
         <label for="duration">duration :</label>
         <input type="number" onChange={(e)=>{setNewDuration(e.target.value)}}></input>
         <label >observations:</label>
         <input type="textarea" onChange={(e)=>{setNewObservation(e.target.value)}}></input>
         {/* <button onClick={loadExperience}>Load</button> */}
         <button onClick={changeExperience}>Save</button>
         <button onClick={deleteExperience}>Delete</button>
      </form>
        </div>
     
            
    )

}
export default ChangeExperience;