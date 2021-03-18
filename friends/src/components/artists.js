import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Artists extends React.Component {
  state = {
    artist: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const token = localStorage.getItem("authToken");
    //console.log("token", token);
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
       // console.log(res);
        this.setState({
          ...this.setState,
          artist: res.data,
        });
        //console.log(
        //  "this.state.artist from Artist component",
        //  this.state.artist[0].name
       // );
      })
      .catch((error) =>
        console.log(
          "error message from getData in the friends component",
          error
        )
      );
  };

  render() {
    return this.state.artist.map((item, idx) => {
      return (
        <div className="parallax-newCard" key={idx}>
          <div className="content d-flex flex-row justify-content-around">
            <div className='d-flex justify-content-around flex-column' style={{textAlign: 'center'}}>
              <a href={this.state.artist[idx].artist_link}>
              <img
                src={this.state.artist[idx].image_url}
                alt={this.state.artist[idx].name}
                style={{minWidth: '35vw', boxShadow: '0 0 2vh black', border: '1rem solid white' }}
              /></a>
              <h2 style={{ color: "white", margin: '1vh', textShadow: '0 0 1rem white' }}>{this.state.artist[idx].name}</h2>
              <h5 style={{color: 'white', textShadow: '0 0 1rem white'}}>Active Since: {this.state.artist[idx].active_since}</h5>
            </div>
            <div className='d-flex align-items-start' style={{textAlign: 'justify', margin: '0 2vw'}}>
                <h5 style={{margin: '3rem 0', textShadow: '.2rem .2rem .2rem #444'}}>{this.state.artist[idx].bio}</h5>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default Artists;
