import React from 'react';

class DeleteFriend extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            friends: {
                name: '',
                age: '',
                email: '',
            }
        }
    }

    handleChange = e => {
        this.setState({
            friends: {
                ...this.state.friends,
                [e.target.name]: e.target.value,
            },
        })
    }

    deleteMessage = e => {
        e.preventDefault();
        this.props.deleteMessage('62')
    }
    
    render(){
        return(
            <div>
            <h1>Delete a Friend ☠️</h1>
            <form onSubmit={this.deleteMessage}>
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
            Delete Friend
        </button>

            </form>
            </div>
        )
}

}

    
    


export default DeleteFriend;
