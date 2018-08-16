import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const FriendForm = props => {
  return (
    <div className="friend-form">
      <Form onSubmit={props.onSubmit} inline>
        <FormGroup>
          <Input
            type="text"
            name="name"
            placeholder="Add friend's name..."
            onChange={props.onChange}
            autoComplete="off"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="age"
            placeholder="Add friend's age..."
            min="0"
            max="200"
            onChange={props.onChange}
            autoComplete="off"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="Add friend's email..."
            onChange={props.onChange}
            autoComplete="off"
            required
          />
        </FormGroup>
        <Button>Add friend</Button>
      </Form>
    </div>
  );
};

export default FriendForm;
