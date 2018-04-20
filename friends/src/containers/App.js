import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, Container, Row, Col, Button } from 'reactstrap';

import { fetchFriends, deleteFriend, updateFriend } from '../actions';
import FriendForm from './FriendForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateFriendForm: false,
      name: '',
      age: '',
      email: '',
    };
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  updateFriend = friendId => {
    const friend = {};
    if (this.state.name !== '') {
      friend.name = this.state.name;
    }
    if (this.state.age !== '') {
      friend.age = Number(this.state.age);
    }
    if (this.state.email !== '') {
      friend.email = this.state.email;
    }
    this.props.updateFriend(friendId, friend);
    this.setState({name: '', age: '', email: ''});
  }

  deleteFriend = friendId => {
    this.props.deleteFriend(friendId);
  };

  handleEditFriend = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showUpdateFriendForm = () => {
    this.setState({ showUpdateFriendForm: !this.state.showUpdateFriendForm });
  };

  render() {
    return (
      <div>
        <FriendForm />
        {this.props.pending ? <p>Loading...</p> : null}
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
        <h1 className="friendsHeader">Friends List</h1>
        <Container>
          <Row className="friendsRow">
            {this.props.friends.map(friend => {
              return (
                <div key={friend.id} className="friendCard">
                  <Col sm="12">
                    <Card body>
                      <CardTitle>Name: {friend.name}</CardTitle>
                      <CardText>Age: {friend.age}</CardText>
                      <CardText>Email: {friend.email}</CardText>
                      <div className="editFriend">
                        <Button
                          color="warning"
                          className="editFriendButton"
                          onClick={this.showUpdateFriendForm}
                        >
                          Update
                        </Button>
                        <Button
                          color="danger"
                          className="editFriendButton"
                          onClick={() => this.deleteFriend(friend.id)}
                        >
                          Delete
                        </Button>
                      </div>
                      {this.state.showUpdateFriendForm ? (
                        <div>
                          <input
                            type="text"
                            onChange={this.handleEditFriend}
                            placeholder="name"
                            name="name"
                            value={this.state.name}
                          />
                          <input
                            type="text"
                            onChange={this.handleEditFriend}
                            placeholder="age"
                            name="age"
                            value={this.state.age}
                          />
                          <input
                            type="text"
                            onChange={this.handleEditFriend}
                            placeholder="email"
                            name="email"
                            value={this.state.email}
                          />
                          <button onClick={() => this.updateFriend(friend.id)}>
                            Update Friend
                          </button>
                        </div>
                      ) : null}
                    </Card>
                  </Col>
                </div>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    pending: friendsReducer.pending,
    error: friendsReducer.error
  };
};

export default connect(mapStateToProps, { fetchFriends, deleteFriend, updateFriend })(App);
