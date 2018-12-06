import React from 'react';
import {fetchFriends} from '../actions';
import {connect} from 'react-redux';
import Friend from './Friend';
import FriendForm from './FriendForm';

import styled from 'styled-components';
import {ReactSpinner} from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 34px;
    font-weight: bold;
    font-family: 'Charmonman', cursive;
    margin-top: 20px;
    color: green;
  }
`;

const DivFriendsList = styled.div`
  border: 1px solid black;
  background-color: #0e0e13;
  border-radius: 5px;
  color: #23c723;
  padding: 10px;
  margin: 10px auto;
  max-width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 16px;

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
    color: #23c723;
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
    console.log('list props', this.props);
    if (this.props.fetching)
      return (
        <DivSpinner>
          <h1>loading friends</h1>
          <ReactSpinner style={{color: 'black'}} />
        </DivSpinner>
      );
    return (
      <Wrapper>
        <h1>Friends List</h1>
        <FriendForm
          selected={this.props.selected}
          editMode={this.props.editMode}
        />
        <DivFriendsList>
          {this.props.friends.map(f => (
            <Friend key={f.id} friend={f} id={f.id} />
          ))}
        </DivFriendsList>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  console.log('mstp', state);
  return {
    friends: state.friends,
    fetching: state.fetching,
    selected: state.selectedFriend,
    editMode: state.editMode,
  };
};

export default connect(
  mapStateToProps,
  {fetchFriends},
)(FriendsList);
