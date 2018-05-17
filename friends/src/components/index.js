import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetcher from '../actions';
import Friends from './friends.js';
import Front from './front.js'
import './app.css';

class App extends Component {

  componentDidMount() {
    this.props.fetcher('http://localhost:5000/api/friends');
  }

  render() {
    if (this.props.fetched) return (
      <div className="App mb-5">

          <Friends friendData={this.props.friends} />

      </div>
    );
    else return (
      <div className="App">

          <Front />

      </div>
    );
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
  fetcher
})(App);
