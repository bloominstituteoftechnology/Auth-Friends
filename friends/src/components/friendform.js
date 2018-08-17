import React from 'react';

const FriendForm = () => {
    return (  
        <div>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Age"/>
            <input type="text" placeholder="Email"/>
            <button>Add New Friend</button>
        </div>
    );
}
 
export default FriendForm;