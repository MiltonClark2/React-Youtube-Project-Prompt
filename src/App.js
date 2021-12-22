import { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Video from "./components/Video";
import About from "./About";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Video/:id" render={(props) => <Video {...props} />} />

          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
