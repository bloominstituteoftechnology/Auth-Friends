import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/App.css';
import { getFriends } from '../actions'

class App extends Component {
  componentDidMount(){
    console.log("CDM", this)

  }
  render() {
    return (
      <div className="App">
      <p>hello,</p>
      <p>app</p>
      {(this.props.state.isFetching) ? <p>is</p> : <p>is not</p>}
      <p>fetching data</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = {
  getFriends
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
