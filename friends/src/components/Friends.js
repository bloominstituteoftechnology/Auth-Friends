import React from 'react';
import { deleteFriend } from '../actions';

import './Friends.css';

const Friends = (props) =>{ 
    return (
            <div >
                <ul>
                {props.friends.map((friend,index) => {
                   return ( 
                   <div className="divList" key={index}>    
                        <li>{friend.name}</li>
                        <li>{friend.age}</li>  
                        <li>{friend.email}</li>                      
                    </div> 
                   );
                })}
                </ul>    
            </div>
    )
}

export default Friends;