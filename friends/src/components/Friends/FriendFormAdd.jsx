import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from 'mdbreact';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    width: 100%;
    margin: 10% 10% 0 25%;
`;

function FriendFormAdd(props) {
    function handleSubmit(e) {
        e.preventDefault();

        props.handleAddNewFriend(e);
        props.toggle();
    };

    return (
        // <div>
        //     <h2>Add New Friend</h2>
        //     <form>
        //         <input type="text" placeholder='Name' value={props.friend.name} name='name' onChange={props.handleChange} />
        //         <input type="text" placeholder='Age' value={props.friend.age} name='age' onChange={props.handleChange} />
        //         <input type="text" placeholder='Email' value={props.friend.email} name='email' onChange={props.handleChange} />
        //         <button onClick={handleSubmit}>Submit</button>
        //     </form>
        // </div>

        <Wrapper>
            <Container>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Add a Friend</p>
                  <div className="grey-text">
                    <Input label="Name" icon="user" group type="text" validate error="wrong" success="right" value={props.friend.name} onChange={props.handleChange} name="name"/>
                    <Input label="Age" icon="user" group type="text" validate value={props.friend.age} onChange={props.handleChange} name="age"/>
                    <Input label="Email" icon="envelope" group type="email" validate error="wrong" success="right" value={props.friend.email} onChange={props.handleChange} name="email"/>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button className='btn btn-elegant' type="submit" onClick={event => {handleSubmit(event)}}>Add</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      
        <Modal isOpen={props.modal14} toggle={props.toggle} centered>
            <ModalHeader toggle={props.toggle}>Friend</ModalHeader>
            <ModalBody>
                Friend Added
            </ModalBody>
            <ModalFooter>
                <Button className='btn btn-elegant' onClick={props.toggle}>Ok</Button>
            </ModalFooter>
        </Modal>
        </Wrapper>
    )
};

export default FriendFormAdd;