import './App.css';
import { Component } from 'react';
import About from './About';
import VideoPlayer from './VideoPlayer';



class App extends Component {
  render(){
    return (
      <div>
        <About />
        <VideoPlayer />
      </div>
    );
  }
}

export default App;
