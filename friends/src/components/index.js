import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetcher from '../actions';
import { Route } from 'react-router-dom';
import Friends from './friends.js';

class App extends Component {

  componentDidMount() {
    this.props.fetcher('http://localhost:5000/api/friends');
  }

  render() {
    return (
      <div className="App">

        <Route path="/" render={() => (
          <Friends friendData={this.props.friends} />
        )} />

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
