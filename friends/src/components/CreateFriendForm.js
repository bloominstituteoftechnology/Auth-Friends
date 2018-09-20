import React from 'react';

class CreateFriendForm extends React.Component {
    state = {};

    handleInput = e => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    
    render() {
    return (
        <form>
            <input type="text" name="name" placeholder="Name" onChange={this.handleInput} />
            <input type="number" name="age" placeholder="Age" onChange={this.handleInput}/>
            <input type="text" name="email" placeholder="Email" onChange={this.handleInput}/>
            <div className="button" onClick={()=>this.props.addFriend(this.state)}>Add Friend</div>
        </form>
    )
}
}

export default CreateFriendForm;