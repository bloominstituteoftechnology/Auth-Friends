import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions';
import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient ({
  uri: 'http://localhost:5000/api/friends'
});

class App extends Component {
  constructor(props) {
    super(props);

    this.array = [];
    this.state = {
      onRef: null
    }
  }
  
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">

        {
          this.props.fetching ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) :
            <div>
              <CreateFriendForm />

              <div className='open-close-container'>
                <button onClick={() => this.state.onRef.forEach(name => name.openCloseAll(true))}>Open All</button>
                <button onClick={() => this.state.onRef.forEach(name => name.openCloseAll(false))}>Close All</button>
              </div>

              <Friends onRef={(ref, unmount) => {
                if (unmount) {
                  this.array.splice(ref.props.friend.id - 1, 1);
                  this.array.sort((a, b) => a.props.friend.id > b.props.friend.id)
                  this.setState({ onRef: this.array });
                } else {
                  this.array.push(ref);
                  this.array.sort((a, b) => a.props.friend.id > b.props.friend.id)
                  this.setState({ onRef: this.array });
                }
              }
              } friends={this.props.friends} />
            </div>
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetching: state.friendsReducer.fetchingFriends
  }
}

export default connect(mapStateToProps, { getFriends })(App);
