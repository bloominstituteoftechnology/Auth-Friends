import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetch } from './action/action';

class App extends Component {
componentDidMount(){
	this.props.fetch();
}
  render(props) {
    return (
      <div className="App">
	  {this.props.fetchingFriends ? (
	  <img src={logo} className="App-logo" alt="logo" />
	  ) : (
	  <div>
		  {this.props.friends.map((friend,index)=>{
			return(<div key={friend.name}>{friend.name}</div>);
		  })}
	  </div>
	  )}
	  
      </div>
    );
  }
}

const map = (state) => {
return(
{
friends:state.friends,
fetchingFriends:state.fetchingFriends,
});
};

export default connect(map, ({fetch}))(App);
