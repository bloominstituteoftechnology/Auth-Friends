import React from 'react';

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addFriendHandler = e => {
        e.preventDefault();
        if(this.state.name !== '' && this.state.age !== '' && this.state.email !== '') {
            this.props.addNewFriend(this.state);
            this.setState({
                name: '',
                age: '',
                email: '',
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addFriendHandler}>
                    <input 
                        onChange={this.handleChange}
                        type="text"
                        placeholder='Name'
                        value={this.state.name}
                        name='name'   
                        autoComplete='off'                     
                    />
                    <input 
                        onChange={this.handleChange}
                        type="number"
                        placeholder='Age'
                        value={this.state.age}
                        name='age'   
                        autoComplete='off'                     
                    />
                    <input 
                        onChange={this.handleChange}
                        type="email"
                        placeholder='Email'
                        value={this.state.email}
                        name='email'  
                        autoComplete='off'                      
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        );
    }
}

export default CreateFriendForm;