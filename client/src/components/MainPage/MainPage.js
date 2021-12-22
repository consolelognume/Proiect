import React from 'react';
import {Link} from 'react-router-dom';
import './MainPage.css'
import {NavLink} from 'react-router-dom';
import {Navbar , Nav} from 'react-bootstrap'

function mainPage(){


    return(

    <div class="container">
        <div className='navigation-bar'>
            <div className='text-navigation-bar-div'><h1 className='text-navigation-bar-h1'>Hi , we are console.log(nume)</h1></div>
            <nav>
                <ul className='list-nav-bar'>
                    <li className='list-item'><Link to='/login' className='list-item'>Login</Link></li>
                    <li className='list-item'><Link to='/register' className='list-item'>Register</Link></li>
                    <li className='list-item'><Link to='/anonimUser'>Continue as anonim user</Link></li>
                </ul>
            </nav>
        </div>
    </div>
    )
} 

export default mainPage;