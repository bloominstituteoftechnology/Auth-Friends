import React, { Component } from 'react';
import{ connect } from 'react-redux';
class CreateFriendForm extends Component {
    constructor() {
        super();
        this.state = {
            newFriend: '',
        }
    }


        render(){
            return (
            <div>    
                <input placeholder="Enter your name" /> <br />
                <input placeholder="Enter your age" /> <br />
                <input placeholder="Enter your email"/> <br />
                <button> Add Friend </button>
                {console.log(this.state.props)}
            </div>    
            )
        }
}


const mapStateToProps = (state) => {
    return {
      friendsGetRequest: state.friendsGetRequest, 
    };
  };
  
  export default connect(mapStateToProps)(CreateFriendForm);


