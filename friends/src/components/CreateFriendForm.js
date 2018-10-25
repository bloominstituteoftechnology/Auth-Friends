import React from "react";

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }

    changeHandler = e => this.setState({[e.target.name]: e.target.value});

    addFriendHandler = e => {
        e.preventDefault();
        let { name, age, email } = this.state;
        this.props.addFriend({ name, age, email })
        this.setState({ name: "", age: "", email: "" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addFriendHandler}>
                    <input 
                        onChange={this.changeHandler} 
                        placeholder="name" 
                        value={this.state.name} 
                        name="name">
                    </input>
                    <input 
                        onChange={this.changeHandler} 
                        placeholder="age" 
                        value={this.state.age} 
                        name="age">
                    </input>
                    <input 
                        onChange={this.changeHandler} 
                        placeholder="email" 
                        value={this.state.email} 
                        name="email">
                    </input>
                    <button type="submit">Add a new friend!</button>
                </form>  
            </div>
        )
    }
}

export default CreateFriendForm;