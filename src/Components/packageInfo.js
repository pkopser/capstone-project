
import React from "react";
import './packageInfo.css';
import event from '../event.jpeg';
import holiday from '../holiday.jpeg';
import seasonal from '../seasonal.jpeg';
import HeaderBar from "./headerBar";
import { Redirect, Link } from 'react-router-dom';
import PackageManager from "./packageManager";
// import PackageData from '../data.json' ;
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import { PackageRepository } from "./packageRepository";
import './allPackages.css'
import list from './data2.json'

export function PackageInfo (props) {

  const [packages, setPackages] = useState(undefined);
  const packageRepository = new PackageRepository;
  const {id} = useParams();
  const {category} = useParams();
  const {subCategory} = useParams();
     
        return<>

     
<HeaderBar></HeaderBar>


<br></br>
<br></br>

{
      list && list.filter(p=>p.id == id).map( item =>(
        <>

      <div class="center-Section">

<div class="slideshow">
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
  <div class="carousel-item active" id="packageImage">
      <img margin-top="-5rem" src={item.image} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item " id="packageImage">
      <img margin-top="-50px" src={item.img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" id="packageImage">
      <img margin-top="-50rem" src={item.img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" id="packageImage">
      <img src={item.img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div> 

      <div class="about"> 
 <h2 id="package-title" >{item.name}</h2> 


 <p1>
  {item.subHeading}
</p1> 

<p1 id="price">
  Price: ${item.price}
</p1> 

 <p1 id="info">
Includes: <br></br> 
{item.decscription}
 
</p1> 

<a  class="btn" href={`/${category}/${subCategory}`}>
<button>Return to {subCategory} Decorations </button>
</a> 

<a class="btn" href={`/${category}`}>
<button>Return to {category} Decorations</button>
</a> 
</div>

</div>
</>
      ))}


 





</>
}





