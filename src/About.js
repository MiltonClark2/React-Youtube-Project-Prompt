import { Component } from "react";
import peopleData from "./AboutUsData";
import fellow0 from "./photos/hannah.png"
import fellow1 from "./photos/milton.png"
import fellow2 from "./photos/erian.png"

class About extends Component {
  render() {
    return (
      <div id="about-us-container">
        {/* <div id="project-info">
            <h2> About the Project</h2>
            <p>Project summary will go here.</p>
          </div> */}
          <div id="header"> 
          <h1>About the project</h1>
          <p> Using React we created a Youtube clone by fetching data from a Youtube API. 
              The user is able to search for videos and whatever is searched will be displayed to the screen
              as an array of videos. When a video is clicked only that video will be displayed to the screen.
          </p>
          </div>
        <div id="p1" className="person-card">         
          <h2>{peopleData[0].name}</h2>
          <img src={fellow0} alt="image of pursuit fellow" />
          <p>{peopleData[0].bio}</p>
          <a href={peopleData[0].gitHubLink} target="_blank">Github</a>
        </div>

        <div id="p2"className="person-card">        
          <h2>{peopleData[1].name}</h2>
          <img src={fellow1} alt="image of pursuit fellow" />
          <p>{peopleData[1].bio}</p>
          <a href={peopleData[1].gitHubLink} target="_blank">Github</a>
        </div>

        <div id="p3" className="person-card">       
          <h2>{peopleData[2].name}</h2>
          <img src={fellow2} alt="image of pursuit fellow" />
          <p>{peopleData[2].bio}</p>
          <a href={peopleData[2].gitHubLink} target="_blank">Github</a>
        </div>
      </div>
    );
  }
}
export default About;
