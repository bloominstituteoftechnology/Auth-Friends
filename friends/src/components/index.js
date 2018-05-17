import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetcher, beginEdit, cancelEdit } from '../actions';
import Friends from './friends.js';
import Front from './front.js';
import AddFriend from './addfriend.js';
import './app.css';

class App extends Component {

  componentDidMount() {
    this.props.fetcher('http://localhost:5000/api/friends');
  }

  render() {
    if (this.props.fetching) return (
      <div className="App">

          <Front />

      </div>
    );
    else if (this.props.add) return (
      <div>
        <AddFriend />
      </div>
    );
    else if (this.props.fetched) return (
      <div className="App mb-5">

          <Friends friendData={this.props.friends} />

      </div>
    );
    else return (
      <div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    fetched: state.fetched,
    error: state.error
  }
}

export default connect(mapStateToProps, {
  fetcher, beginEdit, cancelEdit
})(App);
