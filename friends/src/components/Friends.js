import React from 'react';
// Redux
import { connect } from 'react-redux';


const Friends = (props) => {
  return (
    <div className="list">
      {props.friends.map(obj => {
        return <FriendDisplay 
          key={obj.id}
          {...obj}
        />;
      })}
    </div>
  );
}

const FriendDisplay = (data) => {
  const { name, id, age, email } = data;
  return (
    <div className="friend bb ph2 pt2 ma2">
      Hello, I'm {name} and I'm {age} years old. Email me at {email}!
    </div>
  )
}

const mapStateToProps = state => {
  console.log("Friends.js mapStateToProps", state);
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps, null)(Friends);