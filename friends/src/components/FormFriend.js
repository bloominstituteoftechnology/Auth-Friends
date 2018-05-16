import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSingleFriend} from '../actions/Friends';
import {FormGroup, ControlLabel, FormControl, Row, Col, Grid} from 'react-bootstrap';
// import AlertSuccess from './SuccessAlert';
import styled  from 'styled-components';

class FormFriend extends Component {
  state = {
    name:this.props.friendF.name,
    age:this.props.friendF.age,
    email:this.props.friendF.email,
    id:this.props.friendF.id,
  };

submitUpdate = (e, index) => {
  e.preventDefault();
  this.props.updateSingleFriend(this.state, index);
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
      <FormContainer>
        <Grid>
          <Row className="show-grid">
            <Col md={6} className={"col-up"}>
              <form>
                <FormGroup>
                  <div className={"title-form"}>
                    <ControlLabel><h2>Update</h2></ControlLabel>
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
                    <button onClick={(e) => {this.submitUpdate(e, this.state.id)}} className={"btn btn-primary btn-md"}> Update </button>
                  </div>
                </FormGroup>
              </form>
            </Col>
          </Row>
        </Grid>
      </FormContainer>
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


export default connect(mapStateToProps, {updateSingleFriend})(FormFriend);


const FormContainer = styled.div`
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