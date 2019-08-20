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
        .get('http://localhost:5000/api/data')
        .then(res => {
          console.log(res)
          this.setState({
            friends: res.data
          });
        })
        .catch(err => console.log(err.response));
    };
  
   
    render() {
      
      return (
        <div className="gas-prices">
        </div>
      );
    }
  }
  
  export default FriendsList;