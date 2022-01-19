import React, { useState ,useEffect} from "react";
import Axios from "axios";
import {useParams} from 'react-router-dom';
import './MyExperiences.css';
import {useNavigate} from 'react-router-dom';


function MyExperiences(){
    
    

    const navigate = useNavigate();
    const [experiences,setExperiences] = useState([]);
    const {id} = useParams();
    const [keyword,setKeyWord] = useState("");
    const [idExperience,setIdExperience]=useState();
    
    useEffect(()=>{

        Axios.get('http://localhost:7000/api/getExperienceByUserId/'+id).then(response=>{
            
            setExperiences(response.data);
            
            // for(let element of response.data){
            //     setExperiences([ ... experiences],{
            //         id:element.id,
            //         vehicleId:element.vehicleId,
            //         transportId:element.transportId,
            //         startingPointId:element.startingPointId,
            //         destinationPointId:element.destinationPointId,
            //         crowdness:element.crowdness,
            //         time:element.time,
            //         duration:element.duration,
            //         observation:element.observation,
            //         userId:element.userId
            //     })

                
            // }
            
        })
    })

    

    const seeExperiences = () => {
        return experiences.map( (experience , i) => {
            return(
                <tr key={i}>
                    <td>{experience.duration}</td>
                    <td>{experience.time}</td>
                </tr>
            )
        })
        
    }

    const seeExperiencesByKeyWord = ()=> {
   
        if(experiences.filter(experience=>experience.startingPointName === keyword).length>0){
            return experiences.filter(experience=>experience.startingPointName === keyword).map((experience,i)=>{
                return(
                  
                        
                            <tr key={i}>
                                <td>{experience.id}</td>
                                <td>{experience.vehicleName}</td>
                                <td>{experience.transportName}</td>
                                <td>{experience.startingPointName}</td>
                                <td>{experience.destinationPointName}</td>
                                <td>{experience.crowdness}</td>
                                <td>{experience.time}</td>
                                <td>{experience.duration}</td>
                                <td>{experience.observations}</td>
                            </tr>
                       
                   
                )
            })
        }else if(experiences.filter(experience=>experience.vehicleName === keyword).length>0){
            return experiences.filter(experience=>experience.vehicleName === keyword).map((experience,i)=>{
                return(
                   
                                <tr key={i}>
                                    <td>{experience.id}</td>
                                    <td>{experience.vehicleName}</td>
                                    <td>{experience.transportName}</td>
                                    <td>{experience.startingPointName}</td>
                                    <td>{experience.destinationPointName}</td>
                                    <td>{experience.crowdness}</td>
                                    <td>{experience.time}</td>
                                    <td>{experience.duration}</td>
                                    <td>{experience.observations}</td>
                                </tr>
                     
                )
            })
        }else if(experiences.filter(experience=>experience.transportName === keyword).length>0){
            return experiences.filter(experience=>experience.transportName === keyword).map((experience,i)=>{
                return(
                   
                    <tr key={i}>
                        <td>{experience.id}</td>
                        <td>{experience.vehicleName}</td>
                        <td>{experience.transportName}</td>
                        <td>{experience.startingPointName}</td>
                        <td>{experience.destinationPointName}</td>
                        <td>{experience.crowdness}</td>
                        <td>{experience.time}</td>
                        <td>{experience.duration}</td>
                        <td>{experience.observations}</td>
                    </tr>
         
    )
            })
        }
    }

    const optionsForExperiences =()=>{
        return experiences.map( (experience , i) => {
            return(
                <option>{experience.id}</option>
            )
        })
    }

    const changeExperience =()=>{
        navigate(`/myprofile/${id}/myexperiences/${idExperience}`);
    }

    return(
        <div className="container">
            <input  className="text_cautare" type="text" placeholder="Type keyword here" onChange={(e)=>{setKeyWord(e.target.value)}}></input>
            <table className="table">
                <tbody>
                    {seeExperiences()}
                </tbody>
            </table>
            <table className="tabel_vizibil" id="tabel_id">
                <tbody>
                    {seeExperiencesByKeyWord()}
                </tbody>
                
            </table>
            <select onChange={(e)=>{setIdExperience(e.target.value)}} >
            <option disabled selected value> -- select an option -- </option>
                {optionsForExperiences()}
            </select>
            <button onClick={changeExperience}>Navigate to the experience</button>
        </div>
    )

}

export default MyExperiences;