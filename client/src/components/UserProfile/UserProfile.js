import React, { useState, useEffect } from 'react';
import Axios from "axios";
import {useParams} from 'react-router-dom';
import './UserProfile.css';
import {useNavigate} from 'react-router-dom';



function UserProfile(){

    
    const {id} = useParams();
    const navigate = useNavigate();
    

    const [username,setUserName] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    useEffect(()=>{
        Axios.get('http://localhost:7000/api/getUserById/'+id).then(response=>{
            setUserName(response.data[0].username);
            setFirstName(response.data[0].firstName);
            setLastName(response.data[0].lastName);
            setEmail(response.data[0].email);
            setPassword(response.data[0].password);
            
            
        })

    })

    const currentUser = {
        firstName:firstName,
        lastName:lastName,
        username:username,
        email:email,
        password:password
    }

    const navigateToMyExperiences=()=>{
        navigate(`/myprofile/${id}/myexperiences`);
    }

    const navigateToAddExperience=()=>{
        navigate(`/myprofile/${id}/addexperience`)
    }
    return(
        <div className='container'>
            <div className='head-text'>Hi , {currentUser.username} ! Share your experiences with us !</div>
            <div className='user-buttons'>
                <button className='user-button' onClick={navigateToAddExperience} >Add experience</button>
                <button className='user-button' onClick={navigateToMyExperiences}>See your experiences</button>
            </div>
        </div>
    )

}

export default UserProfile;



