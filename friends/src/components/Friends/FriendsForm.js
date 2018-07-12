import React from 'react';

const FriendsForm = (props) => {
    return (  
        <form>
            <input type = 'text' name = 'friendName'/>
            <input type = 'text' name = 'friendAge'/>
            <input type = 'text' name = 'friendEmail'/>
            <button>Add New Friend</button>
        </form>
    );
}
 
export default FriendsForm;