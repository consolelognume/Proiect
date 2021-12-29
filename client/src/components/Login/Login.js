import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
function Login(){

    const[usernameLogin,setUserName] = useState('');
    const[passwordLogin,setPassword] = useState('');

    const[usernameRegister,setUserNameRegister] = useState('');
    const[passwordRegister,setPasswordRegister] = useState('');
    const navigate = useNavigate();
    const handleSubmit=(e) => {
        e.preventDefault();
    }

   

    function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
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

    const responseGoogle = response => {
        console.log(response.profileObj);
        setUserNameRegister(response.profileObj.name);
        setPasswordRegister(getRandomString(10));
        
        

        Axios.post('http://localhost:7000/api/postUser' , {
            username: usernameRegister,
            password: passwordRegister,
            email:response.profileObj.email,
            firstName:response.profileObj.name,
            lastName:''
        }).then((respone)=>{
            console.log(respone);
        })

        alert(`Congratulations , you created an account . Your user name is : ${usernameRegister} , and your password is ${passwordRegister}`);

        
        

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
                    <div>
                    <GoogleLogin
                        clientId="491150127675-otr5lb46n99j50seb57diliajkplbhv4.apps.googleusercontent.com"
                        buttonText="Register with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                     />
                    </div>

                    
                    
                </form>

                
                
            </div>
            
        </div>
        
    )
}  

export default Login;