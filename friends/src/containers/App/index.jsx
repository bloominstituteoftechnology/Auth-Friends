import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../containers/App/App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import Form from '../../components/Form';
import FriendList from '../../components/FriendList';
import Friend from '../../components/Friend';
import { getFriends, addFriend } from '../../actions';

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

    this.props.addFriend(newFriend);
    const newState = { name: "", age: "", email: "" };
    this.setState(newState);
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
            <FriendList friends={this.props.friends} />
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
    friends: dispatch.friendReducer.friends,
    fetchingFriends: dispatch.friendReducer.fetchingFriends
  }
}

export default withRouter(connect(mapDispatchToProps, { getFriends, addFriend })(App));