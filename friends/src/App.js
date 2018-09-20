import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {getFriends} from './actions';
import Friends from './components/Friends';

class App extends Component {
  
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div>
        {!this.props.friendsFetched ? 
        <h1>Loading...</h1> :
        this.props.friends.data.map((e,i)=><Friends key={i} data={e}/>)
        }
      </div>
    );
  }
}

const mapStateToProps = state=> {
  return {
    friendsFetched: state.friendsFetched,
    friends: state.friends
  }
}

export default connect(mapStateToProps,{getFriends})(App); 
