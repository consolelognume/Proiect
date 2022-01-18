import React, { useState ,useEffect} from "react";
import Axios from "axios";
import {useParams} from 'react-router-dom';


function MyExperiences(){
    
    


    const [experiences,setExperiences] = useState([]);
    const {id} = useParams();
    
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

    return(
        <div className="container">
            <table className="table">
                <tbody>
                    {seeExperiences()}
                </tbody>
            </table>
        </div>
    )

}

export default MyExperiences;