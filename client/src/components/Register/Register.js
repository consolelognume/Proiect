import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register(){

    const [userNameReg,setUserNameReg] = useState('');
    const [passwordReg,setPasswordReg] = useState('');
    const [emailReg,setEmailReg] = useState('');
    const [lastNameReg,setLastNameReg] = useState('');
    const [firstNameReg,setFirstNameReg] = useState('');
    const navigate = useNavigate();

    const registerUser=()=>{
        Axios.post('http://localhost:7000/api/postUser' , {
            username: userNameReg,
            password: passwordReg,
            email:emailReg,
            firstName:firstNameReg,
            lastName:lastNameReg
        }).then((respone)=>{
            console.log(respone);
        })
    }

    const navigateToLogin=()=>{
        navigate('/login');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

   
    

    return(
        <div className='register-container'>
            <div className='form-container-register'>
                <form className='form' onSubmit={navigateToLogin}>
                    <h1>Enter your data !</h1>
                    <input className='form-item' type='text' placeholder='Enter your first name' onChange={(e) => {
                        setFirstNameReg(e.target.value);
                    }}/>
                    <input className='form-item' type='text' placeholder='Enter your last name' onChange={(e)=>{
                        setLastNameReg(e.target.value);
                    }}/>
                    <input className='form-item' type='text' placeholder='Enter your username' onChange={(e) => {
                        setUserNameReg(e.target.value);
                    }}/>
                    <input className='form-item' type='password' placeholder='Enter your password' onChange={(e)=>{
                        setPasswordReg(e.target.value);
                    }}/>
                    <input className='form-item' type='email' placeholder='Enter your email' onChange={(e)=>{
                        setEmailReg(e.target.value);
                    }}/>
                    <button className='form-item-button'  type='Submit'onClick={registerUser}>Register</button> 

                </form>
            <div className='link-to-login'>
                <Link to='/login' className='text-to-login'>Aleardy have an account ? Click here</Link>
            </div>
            </div>
        </div>
    )
}  

export default Register;