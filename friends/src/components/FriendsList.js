import React from 'react';
import { axiosWithAuth } from '../axiosWithAuth.js';


class FriendsList extends React.Component {
    state = {
      friends: []
    };
  
    componentDidMount() {
      this.getData();
    }
  
    getData = () => {
      axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
          this.setState({
            friends: res.data
          });
          console.log(this.state)
        })
        .catch(err => console.log(err.response));
    };
   
    render() {
      
      return (
        <div>
       {this.state.friends.map(i => {
            return <div key={i.id}>{i.name}, {i.age}, {i.email}</div>
          })}
        </div>
      );
    }
  }
  
  export default FriendsList;