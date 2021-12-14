import { Component } from "react";
import YouTube from "react-youtube";



class Video extends Component{
    render(){
        return (
            <div>
                <YouTube
                    videoId = {this.props.match.params.id}
                    opts = {{height: "600", width: "1000"}}
                />
            </div>
        )
    }

}


export default Video;
