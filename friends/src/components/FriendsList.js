import React from 'react';
import {fetchFriends} from '../actions';
import {connect} from 'react-redux';
import Friend from './Friend';
import styled from 'styled-components';
import {ReactSpinner} from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';

const DivFriendsList = styled.div`
  border: 1px solid black;
  background-color: #70708e;
  color: white;
  margin: 10px auto;
  width: 60%;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const DivSpinner = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: green;
    font-size: 20px;
    font-weight: bold;
  }
`;

class FriendsList extends React.Component {
  componentDidMount() {
    console.log('cdm');
    this.props.fetchFriends();
  }

  render() {
    if (this.props.fetching)
      return (
        <DivSpinner>
          <h1>loading friends</h1>
          <ReactSpinner />
        </DivSpinner>
      );
    return (
      <DivFriendsList>
        <h2>Friends List</h2>
        {this.props.friends.map(f => (
          <Friend key={f.id} friend={f} />
        ))}
      </DivFriendsList>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
  };
};

export default connect(
  mapStateToProps,
  {fetchFriends},
)(FriendsList);
