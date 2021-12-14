import React from 'react';
import {Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';


function HomePage(){
  return (
    <div className="homePage">
      <div>
        HOME
      </div>
      <div>
       "MILTON" INPUT/SEARCH BAR/ ERROR MESSAGE 
      </div>

      <div>
        VIDEO SEARCH DISPLAY  
        

      </div>



    </div>
  )
}

function AboutUsPage(){
  return (
     <div className="aboutUs">
   
       <div>
         ABOUT
       </div>

       <div>
         "HANNAH" ABOUT PROJECT/ TEAM BIO CARDS
       </div>


    </div>
  )
}




function App() {

  return (
        <div>
        {/* Navbar */}
        <nav>
          <div className="header">YOUTUBE</div>
          
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


