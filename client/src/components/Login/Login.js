import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login(){

    const[usernameLogin,setUserName] = useState('');
    const[passwordLogin,setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit=(e) => {
        e.preventDefault();
    }

   

    const login =(e) => {
        e.preventDefault();
        Axios.put('http://localhost:7000/api/login',{
            usernameLog:usernameLogin,
            passwordLog:passwordLogin
        }).then((respone) => {
            console.log(respone);
            if(respone.data.message === 'Wrong'){

                alert('Usernsame or password incorrect!');
            }else{

                navigate(`/myprofile/${respone.data.id}`)

            }
            
            
        })
    }

    

    return(
        <div className='main-login'>
            <div className='login-contain'>
                <form className='form-container-login'>
                    <h1>Login</h1>
                    <input className='form-item' type='text' placeholder='Username ...' id='userNameLogin' onChange={(e)=>{
                        setUserName(e.target.value);
                    }}/>
                    <input className='form-item' type='password' placeholder='Password ...' id='passwordLogin' onChange={(e)=>{
                        setPassword(e.target.value);
                    }}/>
                    <button className='form-item-button' type="Submit" onClick={login}>Login</button>
                    <div className='link-to-Register'>
                        <Link to='/Register' className='text-to-Register'>You don`t have an account ? Click here</Link>
                    </div>
                    
                </form>

                
                
            </div>
            
        </div>
        
    )
}  

export default Login;