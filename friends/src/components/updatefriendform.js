import React from 'react';
import { connect } from 'react-redux';

import { updateFriend } from '../actions';

class UpdateFriendForm extends React.Component {
    state = {
        Fields: {
            name: '',
            age: '',
            email: '',
            id: ''
        }
    };

    componentDidMount() {
       
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        const fields = this.state.Fields;
        fields[name] = value;
        this.setState({Fields: fields})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateFriend(this.state.Fields);
       
    }

    render() {
        return (
            <div className="Container">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>New Friend</legend>
                        <input value={this.state.Fields.name} onChange={this.handleInputChange} type="text" name="name" placeholder="enter name" />
                        <input value={this.state.Fields.age} onChange={this.handleInputChange} type="number" name="age" placeholder="enter age" />
                        <input value={this.state.Fields.email} onChange={this.handleInputChange} type="email" name="email" placeholder="enter email" />
                        <button>Add Friend</button>
                    </fieldset>
                </form>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { updateFriend })(UpdateFriendForm);