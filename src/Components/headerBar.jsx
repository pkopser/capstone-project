import React from "react";
import './headerBar.css';
import bannerImage from '../bannerLogo.png';
import logo from '../logo.png';
import LandingPage from "./landingPage";
import { Redirect, Link } from 'react-router-dom';



export class HeaderBar extends React.Component {
    render(){
        return<>

<div class= "bar">
    <div>\<Link to={'/'}>
<img src={logo} width="100"/>
</Link>
</div>

   
<img class="center"  width="400" src={bannerImage}/>


</div>
<div >   
    <Link to={'/'}>
<button type="button" class="homeButton">HOME</button>
</Link>
</div>
        </>

    }
}

export default HeaderBar;