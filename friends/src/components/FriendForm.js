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
    submitHandler = e => {
        e.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="name"
                    
                    />
                    <br></br>
                    <input
                        type="text"
                        name="age"
                        value={this.state.age}
                        placeholder="age"
                    
                    />
                    <br></br>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        placeholder="email"
                    
                    />
                    <br></br>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default FriendForm;