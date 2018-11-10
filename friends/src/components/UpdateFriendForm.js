import React from 'react'

class UpdateFriendForm extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            id: ''
        }
    }

    render(){
        return (
            <div>
                Update FriendForm here.
            </div>
        )
    }
}

export default UpdateFriendForm