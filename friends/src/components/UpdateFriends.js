import React from 'react';
import { connect } from 'react-redux'
import { postFriend } from '../actions/'

class UpdateFriends extends React.Component {
  constructor(props){
    super()
    this.nameInputRef = React.createRef();
    this.ageInputRef = React.createRef();
    this.emailInputRef = React.createRef();
  }
  

  onSubmitClick = () => {
    let newFriend = {
      name: this.nameInputRef.current.value,
      age: Number(this.ageInputRef.current.value),
      email: this.emailInputRef.current.value,
    }
    console.log(newFriend)
    this.props.postFriend(newFriend)
  }

  render (){
    return (
      <div>
        <input type="text" ref={this.nameInputRef} placeholder="Name"/>
        <input type="number" ref={this.ageInputRef} placeholder="Age"/>
        <input type="email" ref={this.emailInputRef} placeholder="Email"/>
        <button onClick={this.onSubmitClick}>Submit</button>
      </div>
    );  
  }
};

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    posting: state.posting,
  }
}
export default connect(mapStateToProps, {postFriend})(UpdateFriends);