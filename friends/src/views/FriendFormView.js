import React from 'react';
import { connect } from 'react-redux';

import { addNewFriend } from '../store/actions';
import FriendForm from '../components/FriendForm/FriendForm';

class FriendFormView extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: '',
        }
        
    };

    handleChange = event => {
        this.setState({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value
            }
        });
    }


    handleAddNewAvenger = event => {
        event.preventDefault();
        this.props.addNewFriend(this.state.friend);
        this.props.history.push('/friends');
    }

    render() {
        return (
            <FriendForm 
                {...this.props}
                friend={this.state.friend}
                handleAddNewAvenger={this.handleAddNewAvenger}
                handleChange={this.handleChange}

            />
        );
    }

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { addNewFriend })(FriendFormView);