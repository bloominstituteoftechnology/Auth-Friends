import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

const DivFriend = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DivAttribute = styled.div`
  display: flex;
  flex-direction: row;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Friends = props => {
  return (
    <DivWrapper>
      {props.friends.map(friend => (
        <DivFriend key={friend.id}>
          <DivAttribute>
            <h5>NAME:&nbsp;&nbsp;</h5>
            <h5>{friend.name}</h5>
          </DivAttribute>
          <DivAttribute>
            <h5>AGE:&nbsp;&nbsp;</h5>
            <h5>{friend.age}</h5>
          </DivAttribute>
          <DivAttribute>
            <h5>EMAIL:&nbsp;&nbsp;</h5>
            <h5>{friend.email}</h5>
          </DivAttribute>
        </DivFriend>
      ))}
    </DivWrapper>
  );
};

// Friends.propTypes = {
//   propertyName: PropTypes.string
// }

export default Friends;
