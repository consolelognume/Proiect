import React, { useState } from "react";
import Axios from "axios";
import {useEffect} from 'react'

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
                    <td>{experience.duration}</td>
                    <td>{experience.time}</td>
                </tr>
            )
        })
    }

    return(
        <div className="container">
            <table id="table_id">
                <tbody>
                    {getExperiences()}
                </tbody>
            </table>
        </div>
    )
}

export default AnonimMainPage;