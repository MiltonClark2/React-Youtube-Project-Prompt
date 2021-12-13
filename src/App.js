
import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      searchInputValue: "",
      fetchData: [],

    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault();


  }

  handleUserInput = (e) => {
    this.setState({
      [this.searchInputValue]: e.target.value
    })
  }

  render(){
    return(
      <div className="App">
        <div id="navbar-container">
          NavBar
        </div>

        <div id="search-container">
          <form id="search-form">
            <input 
              id="search-box" 
              type="text" 
              placeholder="Search..." 
              value={this.searchInputValue}
              onInput={this.handleUserInput}
            />
            <button id="search-button" onClick={this.handleOnSubmit}>Search</button>
          </form>
        </div>

        <div id="display-container">
          <div id="search-results">
            <p>
              No Search Results Yet! Please submit a search above!
            </p>
          </div>
        </div>

    
      </div>
    )
  }
}

export default App;
