import React, {Component} from 'react';
import './FriendsList.css';


class FriendsList extends Component{
  render(){
    console.log(this.props.friends);
    return(
    <div>
    {

      this.props.friends.map( (e,i)=>{
        return(
          <div className="person" key={i}>
            <p>{e.name}</p>
            <p>{e.age}</p>
            <p>{e.email}</p>
          </div>
        );
      })
    }
    </div>
    );
  }
}

export default FriendsList
