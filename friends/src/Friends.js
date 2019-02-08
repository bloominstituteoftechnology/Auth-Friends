import React from 'react';
import { connect } from 'react-redux';

import UpdateFriendsForm from './UpdateFriendsForm';
import { removeFriend } from './Actions'
import './friends.css';

class Friends extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showing: false
    }
  }
  showFrom = e => {
    let toggle = !this.state.showing
    this.setState({showing: toggle})
  };
  render(){console.log(this.props.myFriend.id)
    return(
      <div className="card">
        <h3>{this.props.myFriend.name}</h3>
        <p>Age: {this.props.myFriend.age}</p>
        <p>Email: {this.props.myFriend.email} </p>
        <button type="button" className="editBtn" onClick={this.showFrom}>Edit Friend</button>
        <button type="button" className="removeBtn" onClick={() => this.props.removeFriend(this.props.myFriend.id)}>Remove Friend</button>
        {this.state.showing ? <UpdateFriendsForm friend={this.props.myFriend} id={this.props.myFriend.id}/> : null}
      </div>
    )
  }
}

export default connect(null, { removeFriend: removeFriend })(Friends);