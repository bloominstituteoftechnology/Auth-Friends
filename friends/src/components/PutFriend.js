import React from 'react';

class PutFriend extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friends: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            friends: {
                ...this.state.friends, 
                [e.target.name] : e.target.value
            }
        })
    }

    putMessage = e => {
        e.preventDefault()
        this.props.putMessage('62', this.state.friends)
    }
    
    render(){
        return(
            <div>
                 <h2>Edit Friend 🤗</h2>
                    <form onSubmit={this.putMessage}>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={this.handleChange}
                        value={this.state.friends.name}
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="age"
                        onChange={this.handleChange}
                        value={this.state.friends.age}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={this.handleChange}
                        value={this.state.friends.email}
                    />
                   
                    <button className="quotes-btn" type="submit">
                        Edit Friend
                    </button>
                    </form>
            </div>
        )
    }
}

export default PutFriend;