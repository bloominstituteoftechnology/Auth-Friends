import React from 'react';

class FriendsForm extends React.Component{

    render () {

        return (

            <div>
                <input type="text" placeholder="...enter Name" name = 'name'/>
                <input type="text" placeholder ="...enter Age" name = 'age'/>
                <input type="text" placeholder ="...enter email" name = 'email'/>
                <button>Add</button>
                <button>Update</button>
                <button>Delete</button>
            </div>
        )
    }
}


export default FriendsForm 