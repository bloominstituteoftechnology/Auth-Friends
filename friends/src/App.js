import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import { getFriends, submitFriend } from './actions';

class App extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  }

  componentDidMount() {
    this.props.getFriends();
  }

  handleFriendSubmit = e => {
    e.preventDefault();

    const newFriend = { name: this.state.name,
                       age: this.state.age,
                       email: this.state.email };

    this.props.submitFriend(newFriend);

    this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCancel = e => {
    e.preventDefault();

    this.setState({
      name: '',
      age: '',
      email: ''
    });
  }

  render() {

    if (this.props.fetchingFriends) {
      return (
        <div>Loading friends...</div>
      )
    }

    return (
      <div className="container">
        <Header />

        <Route exact path="/" render={ props =>
            <FriendsList friends={this.props.friends} />
          }
        />

        <Switch>

          <Route path="/api/friends/add" render={ props =>
            <Form name={this.state.name}
                         age={this.state.age}
                         email={this.state.email}
                         handleFriendSubmit={this.handleFriendSubmit}
                         handleInputChange={this.handleInputChange}
                         handleCancel={this.handleCancel} />
            }
          />

          <Route path="/api/friends/:id" render={ props =>
             <Friend {...props} />
            }
          />

        </Switch>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    friends: dispatch.friendsReducer.friends,
    fetchingFriends: dispatch.friendsReducer.fetchingFriends
  }
}

export default withRouter(connect(mapDispatchToProps, { getFriends, submitFriend })(App));
