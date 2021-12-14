import { Component } from "react";
import { Link } from "react-router-dom"


class Home extends Component{
    constructor(){
        super()
        this.state = {
            searchInputValue: "",
            fetchData: [],
            toggle: true
        }
    }

    
    handleUserInput = (e) => {
        this.setState({
          searchInputValue: e.target.value
        })
      };


    handleOnSubmit = (e) => {
        e.preventDefault();

        fetch (
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.searchInputValue}&type=video&key=${process.env.REACT_APP_API_KEY}`
            ).then((res)=>{
                return res.json();
            }).then((data)=>{
                this.setState({
                    fetchData: data.items,
                    searchInputValue:"",
                    toggle: false

                });
            });
      };


    render(){
        let videos = this.state.fetchData.map((video)=>{
            return(
                <div>
                    <div className="video">
                        <div className="image">
                            <Link to = {`/Video/${video.id.videoId}`}>
                                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                            </Link>
                        </div>
                        <div className="title">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <div id="search-container">
                    <form id="search-form" onSubmit={this.handleOnSubmit}>
                        <input 
                            id="search-box" 
                            type="text" 
                            placeholder="Search..." 
                            value={this.searchInputValue}
                            onChange={this.handleUserInput}
                        />
                        <button id="search-button" type="submit">Search</button>
                    </form>
                </div>

                <div id="search-results" style={{display: this.state.toggle ? "block" : "none"}}>
                    <p>
                        No Search Results Yet! Please submit a search above!
                    </p>
                </div>

                
                 
                    <div id="video-results">
                        <div id="videos">{videos}</div>
                    </div>
            </div>
            
        )
    }
} 

export default Home;