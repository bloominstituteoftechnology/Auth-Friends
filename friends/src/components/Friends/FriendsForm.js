import React from "react";
import { connect } from 'react-redux';
import {postFriend} from '../../actions';

class FriendsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendName: "",
      friendAge: "",
      friendEmail: ""
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" value = {this.state.friendName} id="name" name="friendName" onChange = {e => {
            this.changeHandler(e);
        }} />
        <label htmlFor="age">Age</label>
        <input type="text" value = {this.state.friendAge} id="age" name="friendAge" onChange = {e => {
            this.changeHandler(e);
        }} />
        <label htmlFor="email">Email</label>
        <input type="text" value = {this.state.friendEmail} id="email" name="friendEmail" onChange = {e => {
            this.changeHandler(e);
        }} />
        <button onClick = { () => {
            this.props.postFriend({
                name: this.state.friendName,
                age: this.state.friendAge,
                email: this.state.friendEmail,
            })
            }
        }>Add New Friend</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, {postFriend})(FriendsForm);
