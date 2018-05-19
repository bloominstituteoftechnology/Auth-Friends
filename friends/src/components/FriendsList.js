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
        }
        this.showForm = false;
        this.click = false;
    }

    handleOnChange = (event) => {
        if (event.target.name === 'age' && isNaN(event.target.value) === true) {
            alert('You need to type a number in the age input field.')
        }
        else {
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    handleOnClick = (event) => {

        const button = document.getElementsByTagName('button');

        this.click = !this.click;

        if (this.click) {
            for (let i = 0; i < button.length; i++) {
                if (button[i].getAttribute('id') !== `deleteButton${event.target.name}` &&
                    button[i].getAttribute('id') !== `changeButton${event.target.name}` &&
                    button[i].getAttribute('id') !== `updateButton${event.target.name}` &&
                    button[i].getAttribute('id') !== `cancelButton${event.target.name}`) {
                    button[i].disabled = true;
                }
            }
        }
        else {
            for (let i = 0; i < button.length; i++) {
                button[i].disabled = false;
            }
        }

        this.showForm = !this.showForm;

        const divone = document.getElementById(`${event.target.name}`);
        const divtwo = document.getElementById(`${'friend' + event.target.name}`);

        if (this.showForm === true) {
            divone.style.display = "none";
            divtwo.style.display = "initial"
        }
        else {
            divone.style.display = "initial";
            divtwo.style.display = "none"
        }
    }

    updateOnClick = (event) => {

        const button = document.getElementsByTagName('button');

        this.click = !this.click;

        for (let i = 0; i < button.length; i++) {
            button[i].disabled = false;
        }

        const input = document.getElementsByTagName('input');

        for (let i = 0; i < input.length; i++) {
            if (input[i].getAttribute('id') === `inputName${event.target.name}` ||
                input[i].getAttribute('id') === `inputAge${event.target.name}` ||
                input[i].getAttribute('id') === `inputEmail${event.target.email}`) {
                if (input[i].getAttribute('value') === '') {
                    if (input[i].getAttribute('name') === 'age') {
                        this.props.updateData(event.target.name, { [input[i].getAttribute('name')]: Number(input[i].getAttribute('placeholder')) });
                    }
                    else {
                        this.props.updateData(event.target.name, { [input[i].getAttribute('name')]: input[i].getAttribute('placeholder') });
                    }
                }
                else {
                    if (input[i].getAttribute('name') === 'age') {
                        this.props.updateData(event.target.name, { [input[i].getAttribute('name')]: this.state[input[i].getAttribute('name')] });
                    }
                    else {
                        this.props.updateData(event.target.name, { [input[i].getAttribute('name')]: this.state[input[i].getAttribute('name')] });
                    }
                }
            }
        }

        // this.props.updateData(event.target.name, { id: Number(event.target.name), name: this.state.name, age: Number(this.state.age), email: this.state.email });
        this.setState({ name: '', age: '', email: '' });

        this.showForm = !this.showForm;

        const divone = document.getElementById(`${event.target.name}`);
        const divtwo = document.getElementById(`${'friend' + event.target.name}`);

        if (this.showForm === true) {
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
                                                <button id={'deleteButton' + friend.id} onClick={() => this.props.deleteData(friend.id)}>Delete</button><br /><br />
                                                <button id={'changeButton' + friend.id} name={friend.id} onClick={this.handleOnClick}>Change Friend Information</button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <div id={'friend' + friend.id} style={{ display: 'none' }}>
                                    <input id={'inputName' + friend.id} type="text" name="name" value={this.state.name} placeholder={friend.name} onChange={this.handleOnChange} /><br /><br />
                                    <input id={'inputAge' + friend.id} type="type" name="age" value={this.state.age} placeholder={friend.age} onChange={this.handleOnChange} /><br /><br />
                                    <input id={'inputEmail' + friend.id} type="email" name="email" value={this.state.email} placeholder={friend.email} onChange={this.handleOnChange} /><br /><br />
                                    <button id={'updateButton' + friend.id} name={friend.id} onClick={this.updateOnClick}>Update</button><br /><br />
                                    <button id={'cancelButton' + friend.id} name={friend.id} onClick={this.handleOnClick}>Cancel</button>
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
