import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Input } from 'reactstrap';

class UpdateFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
      this.setState({ modal: this.props.modal });
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Update Friend</ModalHeader>
          {/* <ModalBody> */}


          <Form type='submit'>
            <FormGroup>
                <Input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleNewInput}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type='number'
                  placeholder='Age'
                  name='age'
                  value={this.state.age}
                  onChange={this.handleNewInput}
                />
              </FormGroup>
              <FormGroup >
                <Input
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleNewInput}
                />
              </FormGroup>
        </Form>


          {/* </ModalBody> */}
          <ModalFooter>
            <Button onClick={this.toggle}>Update</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpdateFriend;