import React from 'react';

const FriendsForm = (props) => {
    return (  
        <form>
            <label htmlFor = 'name'>Name</label>
            <input type = 'text' id = 'name' name = 'friendName'/>
            <label htmlFor = 'age'>Age</label>
            <input type = 'text' id = 'age' name = 'friendAge'/>
            <label htmlFor = 'email'>Email</label>
            <input type = 'text' id = 'email' name = 'friendEmail'/>
            <button>Add New Friend</button>
        </form>
    );
}
 
export default FriendsForm;