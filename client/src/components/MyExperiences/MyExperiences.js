import React, { useState ,useEffect} from "react";
import Axios from "axios";
import {useParams} from 'react-router-dom';


function MyExperiences(){
    const[experiences,setExperiences] = useState();
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{

        Axios.get('http://localhost:7000/api/getExperienceByUserId/'+id).then(response=>{
            console.log(response);
        })
    })

    return(
        <div>Experiences</div>
    )

}

export default MyExperiences;