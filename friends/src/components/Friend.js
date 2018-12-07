import React from "react";

function Friend(props) {
  //console.log('rendering')

  return (
    <>
        <div className="friend-div">
          Name: {props.friend.name} <br/>
          Age: {props.friend.age} <br/>
          Email: {props.friend.email} <br/><br/>
          <button onClick={props.deleteFriend}>Delete Friend</button>
        </div>
    </>
  );
}

export default Friend