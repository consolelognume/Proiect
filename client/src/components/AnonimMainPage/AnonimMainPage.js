import React, { useState } from "react";
import Axios from "axios";
import {useEffect} from 'react'
import './AnonimMainPage.css'

function AnonimMainPage(){

    const [experiences,setExperiences] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:7000/api/getAllExperiences').then(response=>{
            setExperiences(response.data);
        })
    })

    const getExperiences =()=>{
        return experiences.map( (experience , i) => {
            return(
                <tr key={i}>
                    <td className="td_anonim">{experience.id}</td>
                    <td className="td_anonim">{experience.vehicleName}</td>
                    <td className="td_anonim">{experience.transportName}</td>
                    <td className="td_anonim">{experience.startingPointName}</td>
                    <td className="td_anonim">{experience.destinationPointName}</td>
                    <td className="td_anonim">{experience.crowdness}</td>
                    <td className="td_anonim">{experience.time}</td>
                    <td className="td_anonim">{experience.duration}</td>
                    <td className="td_anonim">{experience.observations}</td>
                </tr>
            )
        })
    }

    return(
        <div className="container">
           <div className="pageTitleAnonim"><span>Browse Experiences</span></div>
  <h1></h1>

            <table className="table_anonim">
            <thead className = "thead_anonim">
                <tr>
                    <th className="th_anonim">ID</th>
                    <th className="th_anonim">Vehicle</th>
                    <th className="th_anonim">Transport</th>
                    <th className="th_anonim">Starting Point</th>
                    <th className="th_anonim">Destination Point</th>
                    <th className="th_anonim">Crowdness</th>
                    <th className="th_anonim">Time</th>
                    <th className="th_anonim">Duration</th>
                    <th className="th_anonim">Observations</th>
                    </tr>
                </thead>
                <tbody className = "tbody_anonim">
                    {getExperiences()}
                </tbody>
            </table>
        </div>
    )
}

export default AnonimMainPage;