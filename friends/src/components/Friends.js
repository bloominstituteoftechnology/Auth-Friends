import React from 'react'
import moment from 'moment'
import loader from 'react-loader-spinner'
import { axiosWithAuth } from '../utils/axiosWithAuth'



class FriendsList extends React.Component{

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth().get('/friends')
      .then((res) => { 
       this.setState(res.data);
       console.log("friends.js list",res.data)
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
  };

  

  //   render() {
  //     return (
  //      <div className="friend">
  //     {this.setState.map((getData) => (
  //       <div className="getData">{getData}</div>
  //     ))}
  //   </div>
   
  //   )
  //     }

  
    render() {
      return (
    <div className="users">
      {/* {this.friends.map((getData) => (
        <div className="user">{getData}</div>
      ))} */}
    </div>
  );   
  };
  
}
export default FriendsList