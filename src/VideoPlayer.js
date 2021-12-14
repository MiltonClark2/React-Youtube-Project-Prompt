import { Component } from "react";
import YouTube from "react-youtube";

class VideoPlayer extends Component {
  constructor() {
    super();

    this.state = {
      videoArray: [],
    };
  }

  // componentDidMount() {
  //   const youTubeAPI = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`;
  //   fetch(youTubeAPI)
  //     .then((result) => result.json())
  //     .then((result) => {
  //       this.setState({
  //         videoArray: result,
  //       });
  //     });
  // }

  render() {
    return(
        <div>Video Player:
             <YouTube video="ya-rr_Lm1N4" height="315px" width="540px" autoplay="1" /> 
        </div>
       
    ) 
  }
}

export default VideoPlayer;
