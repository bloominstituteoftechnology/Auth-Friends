import React from 'react'

function Friend(props) {
  return (
    <div>
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>email: {props.friend.email}</p>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   console.log('MAPPINGSTATE', state);
//   return {
//     friends: state.friendsReducer.friends,
//     error: state.friendsReducer.error,
//   };
// };

// export default connect(
//   mapStateToProps,
// )(Friend);

export default Friend