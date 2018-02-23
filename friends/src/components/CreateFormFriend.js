import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createNewFriend} from '../actions/Friends';
import {FormGroup, ControlLabel, FormControl, Row, Col, Grid} from 'react-bootstrap';
// import AlertSuccess from './SuccessAlert';
import styled from 'styled-components';

class CreateFormFriend extends Component {

    state = {
        name: '',
        age: '',
        email: '',
    };

    submitCreate = (e, index) => {
        e.preventDefault();
      //  console.log('the index', this.state);
      //  this.props.updateSingleFriend(this.state, index);
    };

    updateName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    updateAge = (e) => {
        this.setState({
            age: e.target.value
        });
    };

    updateEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    render() {
        return (
            <CreateFormFriendContainer>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} className={"col-up"}>
                            <form>
                                <FormGroup>
                                    <div className={"title-form"}>
                                        <ControlLabel><h2>Create New</h2></ControlLabel>
                                    </div>

                                    <ControlLabel><strong>Name:</strong></ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={this.state.name}
                                        placeholder="Name"
                                        onChange={this.updateName}
                                        name={"name"}
                                    />
                                    <br/>
                                    <ControlLabel><strong>Age:</strong></ControlLabel>
                                    <FormControl
                                        type="age"
                                        value={this.state.age}
                                        placeholder="Age"
                                        onChange={this.updateAge}
                                        name={"age"}
                                    />
                                    <br/>
                                    <ControlLabel><strong>Email:</strong></ControlLabel>
                                    <FormControl
                                        type="email"
                                        value={this.state.email}
                                        placeholder="Email"
                                        onChange={this.updateEmail}
                                        name={"email"}
                                    />
                                    <div className={"btn-update"}>
                                        <button onClick={(e) => {this.submitCreate(e, this.state.id)}} className={"btn btn-primary btn-md"}> Update </button>
                                    </div>
                                </FormGroup>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </CreateFormFriendContainer>
        );
    }
}

const mapStateToProps = state => {
    const {friends_reducer} = state;
    return {
        error: friends_reducer.error,
        friendF: friends_reducer.singleFriend,
    }
};


export default connect(mapStateToProps, {createNewFriend})(CreateFormFriend);


const CreateFormFriendContainer = styled.div`
    border:0px solid black;
    text-align:left;
    margin-top:10px;

        .title-form {
            text-align:center;
            padding:0px;
        }

        .col-up {
            border:1px solid grey;
            margin:0px auto;
        }

        .btn-update{
            text-align:center;
            margin-top:15px;
        }


`;
