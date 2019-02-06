import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friend: {
                name: '',
                age: null,
                email: ''
            }
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.addFriendHalder}>
                    <input />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default FriendForm;