import React from 'react';

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: ''
        }
    }

    handleChange = e => {
        this.setState({
            name: e.value,
            age: e.value,
            email: e.value
        });
    }

    render() {
        return ( 
            <div>
                <input name='name' onChange={this.handleChange} placeholder='Name' value={this.state.name} />
                <input name='email' onChange={this.handleChange} placeholder='Age' value={this.state.email} />
                <input name='age' onChange={this.handleChange} placeholder='Email' value={this.state.age} />
                <button onClick={() => {
                    this.props.addedFriend({
                        name: this.state.name,
                        age: this.state.age,
                        email: this.state.email
                    })  
                    }  
                }
                >Add Friend</button>
            </div>
        );    
    } 
}
 
export default CreateFriendForm;