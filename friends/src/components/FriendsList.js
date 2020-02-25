import React from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import cuid from 'cuid';
//components
import FriendsForm from "./FriendsForm";

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount(){
        this.getData();
    }
    getData = () => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
        .get('/api/friends/')
        .then(res => {
            this.setState({
                friends: res.data
                // (console.log('this is friends',res.data))
            })
            
        })
        .catch(err => console.log('this is not okay', err));
    }
    render(){
  return (
    <div>
      {this.state.friends.map(data => {
          return (
              <div key={cuid()}>
              <h2>{data.name}</h2>
              <h3>{data.email}</h3>
              </div>
          )
      })}
    
    </div>
  );
    }
};
export default FriendsList;
