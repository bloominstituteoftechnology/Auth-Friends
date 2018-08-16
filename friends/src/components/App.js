import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/App.css';
import {getFriends} from '../store/actions';
import {addFriend} from '../store/actions/addFriend.js';
import NewFriendForm from './newFriendForm';
import styled from 'styled-components';

const AppDiv = styled.div `
  ${ ''/* border: 1px solid red; */}
  width: 100%;
  display: flex;
  flex-direction: column;
  ${ ''/* align-items: space-between; */}

  .list {
    ${ ''/* border: 1px solid green; */}
    text-align: center;
  }
  .status {
    ${ ''/* border: 1px solid blue; */}
  }
`;

class App extends Component {
  componentDidMount() {
    console.log("CDM", this)
    this.props.getFriends();
  }
  render() {
    console.log(this.props)
    return (<AppDiv>
      <NewFriendForm addFriend={this.props.addFriend} className="form"></NewFriendForm>
      <div className="list">

        <h2>Friends List:
        </h2>

        {
          (this.props.state.friendsReducer.isFetched)
            ? (this.props.state.friendsReducer.friends.map(friend => {
              return (<div key={friend.id}>
                {friend.name} -
                Email: {friend.email} -
                Age: {friend.age}
              </div>)
            }))
            : null
        }
        <br></br>
        <div className="status">status: {this.props.state.friendsReducer.status}</div>
      </div>
    </AppDiv>);
  }
}

const mapStateToProps = state => {
  return {state: state};
};

const mapDispatchToProps = {
  getFriends,
  addFriend
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
