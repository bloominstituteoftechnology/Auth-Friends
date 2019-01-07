import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  background-color: black;
  color: white;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Friends = props => {
  return (
    <DivWrapper>
      <h1>This is the Friends Component</h1>
    </DivWrapper>
  );
}

// Friends.propTypes = {
//   propertyName: PropTypes.string
// }

export default Friends;