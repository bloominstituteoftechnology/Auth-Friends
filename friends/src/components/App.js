import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import {fetchingFriendsAction} from "../actions";


class App extends Component {
constructor(props){
	super(props);
	this.state= {
		name: "",
		age: "",
		email: ""
	};

}


  componentDidMount() {
    this.props.fetchingFriendsAction();
  }

changeHandler = event => {
	this.setState({[event.target.name]: event.target.value});

};

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
        <div>  <ul>
            {this.props.friends.map(friend => {
              return <li key={friend.id}>{friend.name}</li>;
            })}
          </ul>
		
		<input onChange={this.changeHandler} type="text" name="name" placeholder="Name" value={this.state.name} />
		<input onChange={this.changeHandler} type="number" name="age" placeholder="Age" value={this.state.age} />		
		<input onChange={this.changeHandler} type="text" name="email" placeholder="Email" value={this.state.email} />

</div>
        )}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
          friends: state.friends,
          fetching: state.fetchingFriends

  };
};


export default connect(mapStateToProps, {fetchingFriendsAction})(App);
