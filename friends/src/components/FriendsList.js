import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { Card, CardText, CardBody, Row, Col } from 'reactstrap';
import './Friends.css';
import { deleteData } from '../actions';
import { updateData } from '../actions';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            showForm: false,
        }
    }

    handleOnChange = (event) => {
        console.log('Event Target Placeholder', event.target.placeholder);
        if (event.target.name === 'age' && isNaN(event.target.value) === true) {
            alert('You need to type a number in the age input field.')
        }
        else {
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    handleOnClick = (event) => {
        this.state.showForm = !this.state.showForm;

        const divone = document.getElementById(`${event.target.name}`);
        const divtwo = document.getElementById(`${event.target.name + 'friend'}`);

        if (this.state.showForm === true) {
            divone.style.display = "none";
            divtwo.style.display = "initial"
        }
        else {
            divone.style.display = "initial";
            divtwo.style.display = "none"
        }
    }

    updateOnClick = (event) => {
        this.props.updateData(event.target.name, { id: Number(event.target.name), name: this.state.name, age: Number(this.state.age), email: this.state.email });
        this.setState({ name: '', age: '', email: '' });

        this.state.showForm = !this.state.showForm;

        const divone = document.getElementById(`${event.target.name}`);
        const divtwo = document.getElementById(`${event.target.name + 'friend'}`);

        if (this.state.showForm === true) {
            divone.style.display = "none";
            divtwo.style.display = "initial"
        }
        else {
            divone.style.display = "initial";
            divtwo.style.display = "none"
        }
    }

    render() {
        return (
            <div className="cards">
                {this.props.fetchingFriends ? (<img src={logo} className="App-logo" alt="logo" />) :
                    (this.props.friends.map((friend) => {
                        return (
                            <div key={friend.id}>
                                <Row id={friend.id}>
                                    <Col sm="6">
                                        <Card className="card">
                                            <CardBody>
                                                <CardText>Name: {friend.name}</CardText>
                                                <CardText>Age: {friend.age}</CardText>
                                                <CardText>Email: {friend.email}</CardText>
                                                <button onClick={() => this.props.deleteData(friend.id)}>Delete</button>
                                                <button name={friend.id} onClick={this.handleOnClick}>Change</button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <div id={friend.id + 'friend'} style={{ display: 'none' }}>
                                    <input type="text" name="name" value={this.state.name} placeholder={friend.name} onChange={this.handleOnChange} /><br />
                                    <input type="type" name="age" value={this.state.age} placeholder={friend.age} onChange={this.handleOnChange} /><br />
                                    <input type="email" name="email" value={this.state.email} placeholder={friend.email} onChange={this.handleOnChange} /><br />
                                    <button name={friend.id} onClick={this.updateOnClick}>Update</button>
                                    <button name={friend.id} onClick={this.updateOnClick}>Cancel</button>
                                </div>
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
            deletingFriend: state.friendsReducer.deletingFriend,
            friendDeleted: state.friendsReducer.friendDeleted,
            updatingFriend: state.friendsReducer.updatingFriend,
            friendUpdated: state.friendsReducer.friendUpdated,
            error: state.friendsReducer.error
        }
    )
}

export default connect(mapStateToProps, { deleteData, updateData })(FriendsList); 
