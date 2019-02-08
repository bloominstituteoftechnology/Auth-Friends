import React from 'react';

import UpdateFriendsForm from './UpdateFriendsForm';
import './friends.css';

class Friends extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showing: false
    }
  }
  showFrom = e => {
    console.log('hi there')
    let toggle = !this.state.showing
    this.setState({showing: toggle})
  };
  render(){
    return(
      <div className="card">
        <h3>{this.props.myFriend.name}</h3>
        <p>Age: {this.props.myFriend.age}</p>
        <p>Email: {this.props.myFriend.email} </p>
        <button type="button" className="editBtn" onClick={this.showFrom}>Edit Friend</button>
        <button type="button" className="removeBtn">Remove Friend</button>
        {this.state.showing ? <UpdateFriendsForm /> : null}
      </div>
    )
  }
}

export default Friends;