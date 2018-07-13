import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import logo from '../logo.svg';

class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showData: false,

        }
    }

    componentDidMount() {
        console.log("props before fetching: ", this.props)
        this.props.fetchData();
        console.log("props after fetching: ", this.props)
    }

    render() {
        return (
            <div className="friends-list">
                {this.props.friends.map( friend => {
                    return (
                    <div className="friend-container" key={friend.id}>
                        <h1>{friend.name}</h1>
                        <span>{friend.age}</span>
                        <span>{friend.email}</span>
                    </div>)
                })}
                {this.props.fetching ?
                    <img src={logo} className="App-logo" alt="logo" /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state);
    //console.log(this.props);
    return {
        friends: state.friends,
        fetching: state.fetching,
        fetched: state.fetched,
        error: state.error
    };
}

export default connect(mapStateToProps, { fetchData })(Friends);
