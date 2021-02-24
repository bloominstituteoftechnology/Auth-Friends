import React from 'react';


class PostFriend extends React.Component {
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
                [e.target.name]: e.target.value,
            },
        })
    }

    postMessage = e => {
        e.preventDefault();
        this.props.postMessage(this.state.friends)
    }
    
    render(){
        return(
            <div>
            <h1>Add a Friend 😍</h1>
            <form onSubmit={this.postMessage}>
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
            Add Friend
          </button>

            </form>
            </div>
        )
    }
}

export default PostFriend;
