import React from 'react';

class CreateFriendForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    };

    inputHandler = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return(
            <div>
                <form>
                    <input name="name" placeholder="name" value={this.state.name} onChange={this.inputHandler} />
                    <input name="age" placeholder="age" value={this.state.age} onChange={this.inputHandler}/>
                    <input name="email" placeholder="email" value={this.state.email} onChange={this.inputHandler}/>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        )
    }
};

export default CreateFriendForm;