import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { Card, CardText, CardBody, Row, Col } from 'reactstrap';
import './Friends.css';
import { deleteData } from '../actions';

class FriendsList extends Component {

    render() {
        return (
            <div className="cards">
                {this.props.fetchingFriends ? (<img src={logo} className="App-logo" alt="logo" />) :
                    (this.props.friends.map((friend) => {
                        return (
                            <div key={friend.id} id={friend.id}>
                                <Row>
                                    <Col sm="6">
                                        <Card className="card">
                                            <CardBody>
                                                <CardText>Name: {friend.name}</CardText>
                                                <CardText>Age: {friend.age}</CardText>
                                                <CardText>Email: {friend.email}</CardText>
                                                <button onClick={() => this.props.deleteData(friend.id)}>Delete</button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        )
                    }))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            friends: state.friendsReducer.friends,
            fetchingFriends: state.friendsReducer.fetchingFriends,
            friendsFetched: state.friendsReducer.friendsFetched,
            savingFriends: state.friendsReducer.savingFriends,
            friendsSaved: state.friendsReducer.friendsSaved,
            updatingFriend: state.friendsReducer.updatingFriend,
            friendUpdated: state.friendsReducer.friendUpdated,
            deletingFriend: state.friendsReducer.deletingFriend,
            friendDeleted: state.friendsReducer.friendDeleted,
            error: state.friendsReducer.error
        }
    )
}

export default connect(mapStateToProps, { deleteData })(FriendsList); 
