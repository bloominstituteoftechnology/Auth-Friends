import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions';
// import Dogs from './Dogs';

class App extends Component {

  componentDidMount() {
    console.log("calling");
    this.props.getFriends();
    
  }

  render() {
    return (
      <div>
       <ul>
            {this.props.friends.map((buddy, i) => {
            return <li key={i}>{buddy.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
  };
};

export default connect(mapStateToProps, { getFriends })(App);
