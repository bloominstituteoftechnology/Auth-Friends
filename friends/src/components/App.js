import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends, createFriends } from '../actions/';

class App extends Component {
state = {
  name: '',
  age:'',
  email:''
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
          placeholder="add name"
          name="name"
          value={this.state.name}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
           <input
          type="text"
          placeholder="add age"
          name="age"
          value={this.state.age}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
           <input
          type="text"
          placeholder="add email"
          name="email"
          value={this.state.email}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.createFriends({ name: this.state.name, age: this.state.age, email:this.state.email });
            this.setState({ name: '',age:'',email:'' });
          }}
        >
          Add friends
        </button>
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
        <div className="container">
        <ul>
          {this.props.friends.map(friends => 
          
          <li key={friends.id} className="li-styles">
         
          {friends.name}
          <div>
          {friends.age}
          </div>
          <div>
          {friends.email}
          </div>
         
          </li>
          )}
        </ul>
        </div>
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
