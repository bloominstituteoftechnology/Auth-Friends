import React from 'react';
import { Media, Button } from 'reactstrap';
import './friends.css';


const Friends = (props) => {
  return(
    <div className="friends" >
      <Button color="success" onClick={props.addButton} >Add Friend</Button>
      {props.friendData.map((friend) => {
        return (
          <div key={friend.id} className="mt-5 friend">
            <Media>
              <Media left>
                <img src="https://picsum.photos/64/64/?random" alt="Random placeholder" />
              </Media>
              <Media body>
                <Media heading>
                  {friend.name}
                </Media>
                <p>age: {friend.age}</p>
                <p>email: {friend.email}</p>
              </Media>
            </Media>
          </div>
        );
      })}
    </div>
  );
}



export default Friends;
