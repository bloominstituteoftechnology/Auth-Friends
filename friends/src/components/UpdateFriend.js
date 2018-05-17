import React, { Component } from 'react';
import { updateFriend } from '../actions';
import { connect } from 'react-redux';

class UpdateFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.friend.name,
            age: props.friend.age,
            email: props.friend.email,
            friend: props.friend
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            id: this.state.friend.id
        };
        this.props.updateFriend(newFriend);
    }
    
    render() { 
        return (
            <React.Fragment>
                <form className="change-friend" onSubmit={this.handleSubmit}>
                    <input value={this.state.name} 
                        name="name" 
                        onChange={this.handleChange}/>
                    <input value={this.state.age} 
                        name="age" 
                        onChange={this.handleChange}/>
                    <input value={this.state.email} 
                        name="email" 
                        onChange={this.handleChange}/>
                    <button 
                        className="btn submit"
                        onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.updating,
        fetched: state.updated,
        error: state.error
    }
}
 
export default connect(mapStateToProps, { updateFriend })(UpdateFriend);