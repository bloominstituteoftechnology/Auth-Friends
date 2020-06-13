import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios';

class FriendsList extends React.Component {
  state = {
    friends: [],
    newFriends: {
      id: Date.now(),
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res.data)
        this.setState({friends: res.data})
      })
      .catch(err =>
        console.error("ERROR", err.message)
      );
  };

  
postData = (e) => {
  e.preventDefault();
  axiosWithAuth().post("http://localhost:5000/api/friends", this.state.newFriends)
  .then(res => {
    this.setState({newFriends: {id: Date.now(), name: "", age: "", email: ""}})
  })
  .catch(err => console.error("Error", err.message))
  
  
  }  

  handleSubmit = e => {

    e.preventDefault();
    this.postData(e);

  }

handleChange = e => {

  this.setState({...this.state,
 newFriends: {...this.state.newFriends, [e.target.name]: e.target.value} })

}

  render() {
   
    return (
      <div>
           <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input 
                type="text"
                name="name"
                value={this.state.newFriends.name}
                onChange={this.handleChange}
                />
              </label>
              <label>
                Age:
                <input 
                  type="text"
                  name="age"
                  value={this.state.newFriends.age}
                  onChange={this.handleChange}
                  />
              </label>
              <label>
                Email:
                <input 
                  type="email"
                  name="email"
                  value={this.state.newFriends.email}
                  onChange={this.handleChange}/>
              </label>
              <button type="submit" >Add Friend</button>
            </form>
        {this.state.friends.map(flist => {
          return (
            <section> 
            <article key={flist.id}>
              {flist.name} | {flist.age} | {flist.email}
            </article>
            </section>
          )
        })}
      </div>
    );
  }
}

export default FriendsList;
