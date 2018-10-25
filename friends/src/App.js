import React, { Component } from 'react';
import './App.css';

import { fetchFriends } from './actions'
import { connect } from "react-redux";
import Friends from './Components/Friends';


class App extends Component {

  componentDidMount() {
    // call our action
    this.props.fetchFriends();
  }

  render() {
    console.log("#########  :  " ,this.props.friends);
    return (
      <div className="App">
          <h1>Friends...</h1>

          <Friends 
              friends = {this.props.friends} 
             
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log("state   : " ,state)
    return {
        friends : state.friendFetchReducer.friends,
        isFetching : state.friendFetchReducer.isFetching,
        error : state.friendFetchReducer.error
    }
}

export default connect(mapStateToProps, { fetchFriends }) (App);
