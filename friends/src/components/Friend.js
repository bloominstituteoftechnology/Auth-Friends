import React from 'react';
import styled from 'styled-components';

const DivFriend = styled.div`
  padding: 30px;
  height: 85px;
  width: 33%;
  background-color: #2b3b79;
  border: 1px solid blue;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: bold;
  }
`;

const Friend = props => {
  return (
    <DivFriend>
      <h3>{props.friend.name}</h3>
      <div>
        <h4>{props.friend.email}</h4>
        <h4>{props.friend.age}</h4>
      </div>
    </DivFriend>
  );
};

export default Friend;
