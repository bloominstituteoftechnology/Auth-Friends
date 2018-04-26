import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions';
import logo from './logo.svg';

class App extends Component {
  componentDidMount(){
    this.props.getFriends()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fwendz</h1>
        </header>
        {this.props.fetching ? <h3>FETCHING FWENDZ</h3> : null}
        {this.props.error !== '' ? 
        <h3>FWENDZ NOT FOUND: {this.props.error}
        </h3> : null}

        <div>
        {this.props.friends.map( friend => {
            return <img src={friend} key={friend} alt='friend' />
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state)
  return{
    fetching: state.fetching,
    error: state.error,
    friends: state.friends
  }
}
export default connect(mapStateToProps, { getDogs }) (App);
