import { Component } from "react";
import AboutUsData from "./AboutUsData";

class About extends Component {
  constructor(){
      super()
  }
  
    render() {
    return (
        <div>
            <h2>About Us </h2>
            <div>
                In this project we will use a Youtube API to create a Youtube clone application.
            </div>
            <div>
                <p>
                    Hannah
                </p>
            </div>
            <div>
                <p>
                    Milton
                </p>
            </div>
            <div>
                <p>
                    Erian
                </p>
            </div>
        </div>
    )
  }
}
export default About;
