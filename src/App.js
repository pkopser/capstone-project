
import './App.css';
import React,  { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { LandingPage } from './Components/landingPage';
import {PackageInfo} from './Components/packageInfo';
import {HeaderBar} from  './Components/headerBar';
import {AllPackages} from './Components/allPackages.jsx';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Redirect, Link } from 'react-router-dom';
import reactDom from 'react-dom';
import {PackageManager} from './Components/packageManager';
import './Components/allPackages.css';
import { PackageRepository } from "./Components/packageRepository";


class App extends Component {
  render() {

   

    return (

      
      <div class="background-color">
      <Router>
      <Switch>

      <Route   exact path="dainty-flan-0c1cbe.netlify.app/:category/:subCategory/:id">
           <PackageInfo></PackageInfo>
      </Route>

      <Route  exact path="dainty-flan-0c1cbe.netlify.app/:category/:subCategory">
           <AllPackages></AllPackages>
      </Route>

      <Route exact path="dainty-flan-0c1cbe.netlify.app/:category">
          <AllPackages ></AllPackages> 
     </Route>

      <Route  exact path="dainty-flan-0c1cbe.netlify.app">
           <h1>hello</h1>
           <LandingPage></LandingPage> 

      </Route> 


     

      

     
    

      </Switch>

    </Router>
    </div>
    );
   

}
}

export default App;
