import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, deleteFriends, updateFriends } from '../actions';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import UpdateFriend from './UpdateFriend';
import './Friends.css';


class Friends extends Component {

    componentDidMount() {
        this.props.getFriends();
    }

    handleDelete = (e) => {
        this.props.deleteFriends(e.target.parentNode.id);
    };

    

    render() {
        return (
            <div>
                {this.props.fetchingFriends ? (
                <h1> FETCHING </h1>
                ) : (
                <div className="Friends__container">
                    {this.props.friends.map(friend => {
                    return <div key={`${friend.name}${friend.id}`}>
                        <Card>
                            <CardBody>
                                <CardHeader>{friend.name}</CardHeader>
                                <CardBody>Age: {friend.age}<br></br>{friend.email}</CardBody>
                                <div className="Friends__buttons" id={friend.id}>
                                <UpdateFriend  id={friend.id}/>
                                <Button outline color="danger" size="sm" className="Friends__button" onClick={this.handleDelete}>Delete</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>;
                    })}
                </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      fetchingFriends: state.fetchingFriends,
      friends: state.friends,
      error: state.errorMessage,
    };
};

export default connect(mapStateToProps, { getFriends, deleteFriends, updateFriends })(Friends);