import React from 'react';

class Friend extends React.Component {
    state = {
        friendName: '',
        friendAge: '',
        friendEmail: ''
    }
    componentDidUpdate(prevProps) {
        if((this.props.updateStaged && !prevProps.updateStaged) || 
        (this.props.updateStaged && this.props.friendToUpdate !== prevProps.friendToUpdate)){
            this.setState({
                friendName: this.props.friendToUpdate.name,
                friendAge: this.props.friendToUpdate.age,
                friendEmail: this.props.friendToUpdate.email
            })
        }
        
    }

    handleChange = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    updateFriend = ev => {
        ev.preventDefault();
        let friend = {
            name: this.state.friendName,
            age: this.state.friendAge,
            email: this.state.friendEmail,
            id: this.props.friendToUpdate.id
        }
        this.props.updateFriend(friend);
    }

    render(){
        return (
            <div className="friend-card">
            {this.props.updateStaged && this.props.friend.id === this.props.friendToUpdate.id? 
                <form onSubmit={this.updateFriend}>
                    <input name="friendName" 
                        placeholder='name'
                        value={this.state.friendName}
                        onChange={this.handleChange}/>
                    <input name="friendAge" 
                        placeholder='age' 
                        value={this.state.friendAge}
                        onChange={this.handleChange}/>
                    <input name="friendEmail"
                        placeholder='email'
                        value={this.state.friendEmail}
                        onChange={this.handleChange} />
                    <button type='submit'>Update Friend</button>
                </form>
            :
                <>
                <h1>{this.props.friend.name}</h1>
                <p>{this.props.friend.age} years old</p>
                <p>{this.props.friend.email}</p>
                <button onClick={()=>this.props.stageUpdate(this.props.friend)}>Update Friend</button>
                <button onClick={()=>this.props.deleteFriend(this.props.friend)}>Delete</button>
                </>
            }
               
            </div>
        )
    }
}

export default Friend;