import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {fetchingFriendsAction} from "../actions";


class App extends Component {
constructor(props){
	super(props);
	
	this.state={
		name:"",
		age:"",
		email:""
	};

}



  componentDidMount() {
    this.props.fetchingFriendsAction();
  }

handler = event => {
	this.setState({[event.target.name]: event.target.value});	

};


  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return <li key={friend.id}>{friend.name}</li>;
            })}
          
<input onChange={this.handler} type="text" placeholder="Name" name="name" value={this.state.name} />
<input onChange={this.handler} type="number" placeholder="Age" name="age" value={this.state.age} />
<input onChange={this.handler} type="text" placeholder="Email" name="email" value={this.state.email} />
</ul>
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
