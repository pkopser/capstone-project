import React, { useState, useEffect } from "react";
import './allPackages.css';
import HeaderBar from "./headerBar";
import '../App.css';
import boho from '../images/boho-christmas.jpeg'
import classic from '../images/classic-christmas.jpeg'
import coastal from '../images/coastal-christmas.jpeg'
import country from '../images/country-christmas.jpeg'
import glam from '../images/glam-christmas.jpeg'
import white from '../images/white-christmas.jpeg'
import { Redirect, Link } from 'react-router-dom';
import PackageManager from "./packageManager.js";
import { PackageRepository } from "./packageRepository";
import axios from 'axios';
import { useParams } from "react-router-dom";
import './landingPage.css';
import list from './categories2.json';
export function AllPackages () {


    const {category} = useParams();
    const {subCategory} = useParams();
    // const [categories, setCategories] = useState(undefined);


    // const packageRepository = new PackageRepository();




    // useEffect(  () => {
    //     onSearch();
        
    //   },[category],[subCategory]);

     
    // let onSearch = () => {
    //     packageRepository.getCategories().then(x => setCategories(x));
    // }


    // if (!categories) {
    //     return <div>Loading Category List...</div>
    // }
    
    let infoGraphic = (category) =>{
        if (subCategory== undefined){
           
             return < span className="infoGraphic"> Explore our {category} Packages by choosing a subcategory on the left hand side! </span>
         
        }
    }
   

        return <>

        <HeaderBar></HeaderBar>
    

       
<h1 class="center-subhead">{category} decor options</h1>


<div class="wholePage">
    <div class="left-side" > 
    <h3 class="subhead"  >Categories</h3>

    {
    
    list && list.filter(p=>p.category == category ).map(category => 
        <div key={category.id} class="btn">
            
            <Link to ={`/${category.category}/${category.name}`} >
        <button type="button" >{category.name}</button>
        </Link>
        </div>

    ) }
  
   

    </div>
    <div class ="right-side">
        
        {infoGraphic(category)}
    
    <PackageManager subCategory={subCategory}></PackageManager>
    
    </div>
    

 


</div>

        </>
    }
