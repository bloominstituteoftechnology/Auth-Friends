import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveFriends } from '../actions';

class Friends extends Component {

    handleClick() {
        this.props.saveFriends();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button>Hi</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      savingFriends: state.fetchingFriends,
      friends: state.friends,
      error: state.errorMessage,
    };
};

export default connect(mapStateToProps, { saveFriends })(Friends);