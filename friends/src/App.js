import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getFriends } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    friend: ''
  };

  componentDidMount(){
    this.props.getFriends();
  }
  
  updateInput = e => {
    this.setState({ friend: e.target.value })
  }

  addFriend = () => {
    const newFriend = { friend: this.state.friend }
    this.props.createFriend(newFriend);
    this.setState({friend: ''})
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fwendz</h1>
        </header>

<input type="text" placeholder="avenger" name="avenger" value={this.state.avenger} onChange={this.updateInput} />
        <button onClick={this.addAvenger}>Add Avenger</button>

        {this.props.fetching ? <h3>FETCHING FWENDZ</h3> : null}
        
        {this.props.error !== '' ? 
        <h3>FWENDZ NOT FOUND: {this.props.error}
        </h3> : null}

        <div>
        {this.props.friends.map( friend => {
            return <img src={friend} key={friend} alt='friend' />
          })}
        </div>
    {/* avengers model code below */}
        <input type="text" placeholder="friend" name="friend" value={this.state.friend} onChange={this.updateInput} />
            <button onClick={this.addFriend}>Add Friend</button>
            {this.props.error !== null ? <h3>{this.props.error}</h3> : null}
            <ul>
              {this.props.friends.map(friend => (
                <li key={friend}>{friend}</li>
              ))}
            </ul>
            {this.props.pending ? <img src={logo} className="App-logo" alt="logo" /> : null}
    {/* avengers model code above */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state)
  return{
    fetching: state.friends,
    error: state.error,
    friends: state.pending
  };
};

export default connect(mapStateToProps, { getFriends, createFriend }) (App);
