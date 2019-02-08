import React from 'react'

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            age : "",
            email: ""
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleChange}
                        name="name"
                        value={this.state.name}
                        type="text"
                        placeholder="Name"
                    />
                    <input 
                        onChange={this.handleChange}
                        name="age"
                        value={this.state.age}
                        type="text"
                        placeholder="Age"
                    />
                    <input 
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                        type="text"
                        placeholder="Email"
                    />
                    <button type="submit">Click Me</button>
                </form>
                
            </div>
        )
    }
}

export default CreateFriendForm