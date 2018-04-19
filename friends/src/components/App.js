import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends, createFriends } from '../actions/';

class App extends Component {
state = {
  friends: ''
}
componentDidMount(){
   this.props.fetchFriends();
}
  render() {
    console.log(this.props)
    return (
      <div className="App">
        {this.props.pending ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
        <p className="App-intro">
          <code></code> 
        </p>
        <input
          type="text"
          placeholder="friends"
          name="friends"
          value={this.state.friends}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.createfriends({ friends: this.state.friends });
            this.setState({ friends: '' });
          }}
        >
          Add friends
        </button>
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
        <ul>
          {this.props.friends.map(friends => <li key={friends}>{friends.name}</li>)}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state =>{
return{

  pending: state.pending,
  error: state.error,
  friends: state.friends


}

}
export default connect(mapStateToProps,{fetchFriends,createFriends})(App);
