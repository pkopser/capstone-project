
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './allPackages.css';
import HeaderBar from "./headerBar";
import '../App.css';
import boho from '../images/boho-christmas.jpeg'
import classic from '../images/classic-christmas.jpeg'
import coastal from '../images/coastal-christmas.jpeg'
import country from '../images/country-christmas.jpeg'
import glam from '../images/glam-christmas.jpeg'
import white from '../images/white-christmas.jpeg'
import { propTypes } from 'react-bootstrap/esm/Image';
import axios from 'axios';
import { PackageRepository } from './packageRepository';
import { AllPackages } from './allPackages';
import list from './data2.json'


export  function PackageManager(props) {  


  // const [packages, setPackages] = useState(undefined);
  // const packageRepository = new PackageRepository();

  // useEffect(  () => {
  //     onSearch();
  //   },[]);

   
  // let onSearch = () => {
  //      packageRepository.getPackages().then(x => setPackages(x));
  // }


  // if (!packages) {
  //     return <div>Loading Package List...</div>
  // }

  return (
    <>

    {
      list && list.filter(p=>p.subCategory == props.subCategory).map( item =>(
        
      
        <Link to={`/${item.category}/${item.subCategory}/${item.id}`}>
   
      <div key={item.id} id="spot"> 
     
      <h1 className="name">{item.name}</h1>
      <img src={item.image} className="image"></img>
       
      </div>
      
      </Link>
      ))}
   </>
  );

}

export default PackageManager;