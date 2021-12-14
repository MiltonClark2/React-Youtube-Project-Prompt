
import { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/Home';
import Video from './components/Video'





class App extends Component{
  constructor(){
    super()
  }

 

 

  render(){
    return(
      <div>
        {/* <Nav /> */}
        <Switch> 
          <Route exact path="/">
            <Home />
          </Route>

          <Route path = "/Video/:id" 
              render={(props)=>(
                <Video {...props} />
              )}
           
          />

          {/* <Route path="/About">
            <About />
          </Route> */}
          
        

        </Switch>
      </div>
    )
  }
}

export default App;
