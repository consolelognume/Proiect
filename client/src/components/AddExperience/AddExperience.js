import React from "react";
import { useState ,useEffect} from "react";
import Axios from "axios";
import {useParams} from 'react-router-dom';
import './AddExperience.css';
import gif from './train.gif'


function AddExperience(){

    const {id} = useParams();


    
    return(
        <div class="wrapper">
    <form class="form">
      <div class="pageTitle title">Add Experience </div>
      <div class="secondaryTitle title">Please fill this form to add an experience</div>
      <input type="text" class="name formEntry" placeholder="Name" />
      <input type="text" class="email formEntry" placeholder="Email"/>
      <textarea class="message formEntry" placeholder="Message"></textarea>
      <input type="checkbox" class="termsConditions" value="Term"/>
      <button class="submit formEntry" onclick="thanks()">Add</button>
    </form>
  </div>
    )
}

export default AddExperience;