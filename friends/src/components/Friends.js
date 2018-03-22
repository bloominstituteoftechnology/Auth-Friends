import React from 'react';
import{ connect } from 'react-redux';
import './Friends.css';

const Friends = (state) =>{ 
    return (
            <div >
                <ul>
                {state.friends.map((friend,i) => {
                   return ( 
                   <div className="divListStyle" key={i}>    
                        <li key={friend.name}> {friend.name} </li>
                        <li key={ friend.age }> {friend.age}  </li>  
                        <li key={ friend.email}> {friend.email} </li>                      
                    </div> 
                   );
                })}
                </ul>    
               {console.log(state)}
            </div>
    )
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends, 
  };
};

export default connect(mapStateToProps)(Friends);