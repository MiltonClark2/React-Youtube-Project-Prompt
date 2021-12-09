
import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  handleButtonClick = () => {
    console.log("Trigger")
  }

  render(){
    return(
      <div className="App">
        <div id="navbar-container">
          NavBar
        </div>
        <div id="search-container">
          <input id="search-box" type="text" placeholder="Search..." />
          <button id="search-button" onClick={this.handleButtonClick}>Search</button>
        </div>
        <div id="display-container">
          <div id="search-results">
            No Search Results Yet! Please submit a search above!
          </div>
        </div>
       

       
      </div>
    )
  }
}

export default App;
