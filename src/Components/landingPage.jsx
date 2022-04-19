import React from "react";
import './landingPage.css';
import event from '../event.jpeg';
import holiday from '../holiday.jpeg';
import seasonal from '../seasonal.jpeg';
import PackageInfo from "./packageInfo";
import { Redirect, Link } from 'react-router-dom';
import HeaderBar from "./headerBar";
import logo from '../black_bannerLogo.png';
import {setThis} from '../App';

export class LandingPage extends React.Component {


render(){
    return<>

    <HeaderBar></HeaderBar>
    

   <div class="welcome">
    <h1 class="center-subhead">Welcome to</h1>
    
    <div class= "app-name">
    <img src={logo} width="700"/>
    </div>

    <h1 class="center-subhead">Let's get decorating!</h1>  

    </div>
  
    <div class='labels'>
      <p id="toplabel">3 Day Rental</p>
      <p id="toplabel">3 Week Rental</p>
      <p id="toplabel">3 Month Rental</p>
      </div>

    <div class="menu-container" >
  
 

      <a href="/Event">
      <div id= "box">
      <img class= "category-image" src={event} ></img>
      </div>
      </a>

   <a href="/Holiday">
      <div id= "box">
      <img class= "category-image" src={holiday} ></img>
      </div>
   </a>

   <a href="/Seasonal">
      <div id= "box" >
      <img class= "category-image" src={seasonal} ></img>
      </div>
      </a>

    </div>

    <div class='labels'>
      <p id="label">EVENT</p>
      <p id="label">HOLIDAY</p>
      <p id="label">SEASONAL</p>
      </div>
    
      <h1 class="small-center-subhead" >Decorum- "Decorations at your doorstep" ℗</h1>  

    </>
    
}
}
export default LandingPage;