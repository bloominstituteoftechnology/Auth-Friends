import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {fetching, deleteFriend} from './actions';
import Addform from './components/addfriend'

class App extends Component {
  componentDidMount() {
    this.props.fetching()
   }
  render() {
    return (
      <div className="App">
        {this.props.fetchingFriends ? (
          <i className="fas fa-spinner fa-pulse"></i>
        ) : (
          <div className="page">
            <Addform />
            <div className="frenz">
            <h1>Super Cool Buddiez</h1>
              {this.props.friends.map(fren => {
                return (
                <div className="fren" key={fren.name}>
                <img src={fren.pic}/>
                <p>{fren.name}</p>
                <p>Age: {fren.age}</p>
                <p>Email: {fren.email}</p>
                <button onClick={()=> this.props.deleteFriend(fren.id)}>Delete Fren</button>
                </div>
                )
                ;})}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    error: state.error
  }
};


export default connect(mapStateToProps, {fetching, deleteFriend})(App);
