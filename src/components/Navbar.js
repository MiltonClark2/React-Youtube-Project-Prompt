import React from 'react';
import {Link, Route, Switch } from 'react-router-dom';
import '../App.css';
import HomePage from './Home';
import AboutUsPage from './About';


function Navbar () {

    return (
          <div>
          {/* Navbar */}
          <nav>
            <div className="header">YOUTUBE</div>
            
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
          </nav>
          
         
        </div>
    )
  }
  
  export default Navbar;