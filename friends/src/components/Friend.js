import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {selectFriend} from '../actions';

const DivFriend = styled.div`
  padding: 30px;
  margin: 5px;
  height: 85px;
  width: 33%;
  background-color: #2b3b79;
  border: 1px solid blue;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: bold;
  }

  &:hover {
    //filter: invert(80%);
    background-color: #23c723;
    color: #2b3b79;
  }
`;

const Friend = props => {
  return (
    <DivFriend onClick={() => props.selectFriend(props.id)}>
      <h3>{props.friend.name}</h3>
      <div>
        <h4>{props.friend.email}</h4>
        <h4>Age: {props.friend.age}</h4>
      </div>
    </DivFriend>
  );
};

export default connect(
  null,
  {selectFriend},
)(Friend);
