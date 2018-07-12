import React from 'react';
// import { connect } from 'react-redux';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

const FriendCard = styled(Card)`
  width: 300px;
  margin-left: 40%;
  margin-bottom: 5px;
`;

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      edit: false,
      name: '',
      age: '',
      email: '',
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      edit: false,
    });
  };

  handleDelClick = id => {
    this.props.deleteHandler(id);
  };

  handleEditClick = () => {
    const { name, age, email } = this.props.friend;
    this.setState({ edit: true, name, age, email });
    setTimeout(() => {
      document.getElementById('nameBox').select();
    }, 300);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCardClick = id => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmitEditClick = id => {
    const { name, age, email } = this.state;
    const editedFriend = {
      name,
      age,
      email,
      id,
    };
    this.props.editHandler(editedFriend);
    this.toggle();
  };

  render() {
    return (
      <div>
        <FriendCard onClick={this.handleCardClick}>
          <Card body style={{ backgroundColor: 'aliceblue' }}>
            <CardTitle className="text-center">
              {this.props.friend.name}
            </CardTitle>
            <CardText>Age: {this.props.friend.age}</CardText>
            <CardText>email: {this.props.friend.email}</CardText>
          </Card>
        </FriendCard>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Edit Friend</ModalHeader>
            <ModalBody>
              {!this.state.edit ? (
                <React.Fragment>
                  <p>Name: {this.props.friend.name}</p>
                  <p>Age: {this.props.friend.age}</p>
                  <p>email: {this.props.friend.email}</p>
                </React.Fragment>
              ) : (
                <Form>
                  <FormGroup row>
                    <Label for="Name" sm={2}>
                      Name
                    </Label>
                    <Col sm={10}>
                      <Input
                        name="name"
                        id="nameBox"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="Age" sm={2}>
                      Age
                    </Label>
                    <Col sm={10}>
                      <Input
                        name="age"
                        type="number"
                        value={this.state.age}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="Email" sm={2}>
                      Email
                    </Label>
                    <Col sm={10}>
                      <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              )}
            </ModalBody>
            <ModalFooter>
              {!this.state.edit ? (
                <span>
                  <Button
                    style={{ width: '70px', marginLeft: '-399px' }}
                    onClick={() => this.handleEditClick()}
                    className="btn btn-outline-primary float-left"
                  >
                    edit
                  </Button>
                  <Button
                    style={{ width: '70px' }}
                    onClick={() => this.handleDelClick(this.props.friend.id)}
                    className="btn btn-outline-danger float-right"
                  >
                    delete
                  </Button>
                </span>
              ) : (
                <Button
                  style={{ width: '140px' }}
                  onClick={() =>
                    this.handleSubmitEditClick(this.props.friend.id)
                  }
                  className="btn btn-outline-primary"
                >
                  submit edits
                </Button>
              )}
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Friend;
