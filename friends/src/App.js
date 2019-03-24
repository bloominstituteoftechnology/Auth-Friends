import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions';



class App extends Component {
  constructor() {
    super();
    this.state = {
      friend: {
        name: '',
        age: null,
        email: ''
      }
    };
  }

  componentDidMount() {
    this.props.getFriends(this.state.friends);
  };
  




  render() {
    return (
      <div className="App">
       <h1>Welcome Friends</h1>

       <div>
        {this.props.friends.map((friend, index) => {
          return (
            <div key={index}>
              <h4>{friend.name}</h4>
              <h4>{friend.age}</h4>
              <h4>{friend.email}</h4>
            </div>
          )
        })}
       
       </div>

       <h1>{this.props.friend}</h1>
      </div>
    );
  }
}






const mapStateToProps = (state) => ({
    friends: state.friends
});


export default connect(mapStateToProps,
  { getFriends }
 ) (App);

// import logo from './logo.svg';

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header> 