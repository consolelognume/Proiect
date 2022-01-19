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
                   <td className="td_permanent">{experience.id}</td>
                    <td className="td_permanent">{experience.vehicleName}</td>
                    <td className="td_permanent">{experience.transportName}</td>
                    <td className="td_permanent">{experience.startingPointName}</td>
                    <td className="td_permanent">{experience.destinationPointName}</td>
                    <td className="td_permanent">{experience.crowdness}</td>
                    <td className="td_permanent">{experience.time}</td>
                    <td className="td_permanent">{experience.duration}</td>
                    <td className="td_permanent">{experience.observations}</td>
                </tr>
            )
        })
        
    }

    const seeExperiencesByKeyWord = ()=> {
   
        if(experiences.filter(experience=>experience.startingPointName === keyword).length>0){
            return experiences.filter(experience=>experience.startingPointName === keyword).map((experience,i)=>{
                return(
                  
                        
                    <tr key={i}>
                    <td className="td_vizibil">{experience.id}</td>
                    <td className="td_vizibil">{experience.vehicleName}</td>
                    <td className="td_vizibil">{experience.transportName}</td>
                    <td className="td_vizibil">{experience.startingPointName}</td>
                    <td className="td_vizibil">{experience.destinationPointName}</td>
                    <td className="td_vizibil">{experience.crowdness}</td>
                    <td className="td_vizibil">{experience.time}</td>
                    <td className="td_vizibil">{experience.duration}</td>
                    <td className="td_vizibil">{experience.observations}</td>
                </tr>
                       
                   
                )
            })
        }else if(experiences.filter(experience=>experience.vehicleName === keyword).length>0){
            return experiences.filter(experience=>experience.vehicleName === keyword).map((experience,i)=>{
                return(
                   
                <tr key={i}>
                    <td className="td_vizibil">{experience.id}</td>
                    <td className="td_vizibil">{experience.vehicleName}</td>
                    <td className="td_vizibil">{experience.transportName}</td>
                    <td className="td_vizibil">{experience.startingPointName}</td>
                    <td className="td_vizibil">{experience.destinationPointName}</td>
                    <td className="td_vizibil">{experience.crowdness}</td>
                    <td className="td_vizibil">{experience.time}</td>
                    <td className="td_vizibil">{experience.duration}</td>
                    <td className="td_vizibil">{experience.observations}</td>
                </tr>
                     
                )
            })
        }else if(experiences.filter(experience=>experience.transportName === keyword).length>0){
            return experiences.filter(experience=>experience.transportName === keyword).map((experience,i)=>{
                return(
                   
                <tr key={i}>
                    <td className="td_vizibil">{experience.id}</td>
                    <td className="td_vizibil">{experience.vehicleName}</td>
                    <td className="td_vizibil">{experience.transportName}</td>
                    <td className="td_vizibil">{experience.startingPointName}</td>
                    <td className="td_vizibil">{experience.destinationPointName}</td>
                    <td className="td_vizibil">{experience.crowdness}</td>
                    <td className="td_vizibil">{experience.time}</td>
                    <td className="td_vizibil">{experience.duration}</td>
                    <td className="td_vizibil">{experience.observations}</td>
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
            <div className="pageTitleMyExp"><span>Browse your Experiences</span></div>
  
            <input  className="text_cautare" type="text" placeholder="Type keyword here" onChange={(e)=>{setKeyWord(e.target.value)}}></input>
            <table className = "table_permanent">
            <thead className = "thead_permanent">
                <tr>
                    <th className="th_permanent">ID</th>
                    <th className="th_permanent">Vehicle</th>
                    <th className="th_permanent">Transport</th>
                    <th className="th_permanent">Starting Point</th>
                    <th className="th_permanent">Destination Point</th>
                    <th className="th_permanent">Crowdness</th>
                    <th className="th_permanent">Time</th>
                    <th className="th_permanent">Duration</th>
                    <th className="th_permanent">Observations</th>
                    </tr>
                </thead>
                <tbody className="tbody_permanent">
                    {seeExperiences()}
                </tbody>
            </table>
            <table className="tabel_vizibil" id="tabel_id">
            <thead className = "thead_vizibil">
                <tr>
                    <th className="th_vizibil">ID</th>
                    <th className="th_vizibil">Vehicle</th>
                    <th className="th_vizibil">Transport</th>
                    <th className="th_vizibil">Starting Point</th>
                    <th className="th_vizibil">Destination Point</th>
                    <th className="th_vizibil">Crowdness</th>
                    <th className="th_vizibil">Time</th>
                    <th className="th_vizibil">Duration</th>
                    <th className="th_vizibil">Observations</th>
                    </tr>
                </thead>
                <tbody className="tbody_vizibil">
                    {seeExperiencesByKeyWord()}
                </tbody>
                
            </table>
            <span className="span_selectare_element">
            <select className="meniu_navigare" onChange={(e)=>{setIdExperience(e.target.value)}} >
            <option disabled selected value> -- select an option -- </option>
                {optionsForExperiences()}
            </select>
            <button className="meniu_navigare" onClick={changeExperience}>Navigate to the experience</button>
            </span>
        </div>
    )

}

export default MyExperiences;