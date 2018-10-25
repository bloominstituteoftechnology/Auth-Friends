import React from "react";

class DeleteFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
        }
    }

    changeHandler = e => this.setState({[e.target.name]: e.target.value});

    deleteFriendHandler = e => {
        e.preventDefault();
        this.props.deleteFriend(this.state.id)
        this.setState({ id: "" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.deleteFriendHandler}>
                    <input 
                        onChange={this.changeHandler} 
                        placeholder="id" 
                        value={this.state.id} 
                        name="id">
                    </input>
                    <button type="submit">Delete an old friend!</button>
                </form>  
            </div>
        )
    }
}

export default DeleteFriendForm;