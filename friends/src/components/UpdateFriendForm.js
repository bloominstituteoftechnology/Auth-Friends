import React from 'react'

class UpdateFriendForm extends React.Component {
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

    handleClick = () => {
        
    }

    render() {
        return (
            <div>
                <form>
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
                </form>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default UpdateFriendForm