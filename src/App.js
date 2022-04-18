
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

      <Route   exact path="/:category/:subCategory/:id">
           <PackageInfo></PackageInfo>
      </Route>

      <Route  exact path="/:category/:subCategory">
           <AllPackages></AllPackages>
      </Route>

      <Route exact path="/:category">
          <AllPackages ></AllPackages> 
     </Route>

      <Route  exact path="/">
           <LandingPage></LandingPage> 
      </Route> 


     

      

     
    

      </Switch>

    </Router>
    </div>
    );
   

}
}

export default App;
