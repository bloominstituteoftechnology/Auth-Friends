import React from 'react'

import { connect } from 'react-redux';
import { createFriend } from '../actions/friendAction';

class CreateFriendForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                name: '',
                age: '',
                email: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            // friend: {
            //     ...this.state.friend,
            //     [event.target.name]: event.target.value,
            // }
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        //this.props.handleAddNewFriend(this.state)
        this.props.createFriend(this.state)
    }

    render(){
        return (
            <div>
                <h3>Create Friend Form</h3>
                <form>
                    <input 
                        placeholder="input name"
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChange}
                    />
                    <input 
                        placeholder="input age" 
                        type="number"
                        value={this.state.age}
                        name="age"
                        onChange={this.handleChange}
                    />
                    <input 
                        placeholder="input email" 
                        type="text"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                    />
                </form>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { createFriend: createFriend })(CreateFriendForm)
//export default CreateFriendForm