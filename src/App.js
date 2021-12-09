import React from 'react';
import {Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';


function HomePage(){
  return (
    <div>
      HOME
    </div>
  )
}

function AboutUsPage(){
  return (
    <div>ABOUT</div>
  )
}




function App() {

  return (
        <div>
        {/* Navbar */}
        <nav>
          <h2>Youtube</h2>
          
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          
        </nav>
        
        {/* Routes */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          
          <Route path="/about" component={AboutUsPage} />
            
          
        </Switch>
      </div>
  )
}

export default App;


