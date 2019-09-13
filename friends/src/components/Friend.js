import React from "react";
import { axiosWithAuth } from "./AxiosAuth";
import {Card, Button, Image} from 'semantic-ui-react';

const Friend = props => {
  const handleEdit = e => {
    e.preventDefault();
    props.history.push(`/edit/${props.friend.id}`);
  };
  return (
    <div>
      <Card className="card">
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={`https://picsum.photos/200/300?random=${props.friend.id}`}
        />
        <Card.Header>{props.friend.name}</Card.Header>
        <Card.Meta>{props.friend.age} years old</Card.Meta>
        <Card.Description>
          Email: {props.friend.email}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={e => handleEdit(e)}>
            Edit
          </Button>
          <Button basic color='red' onClick={e => props.handleDelete(e, props.friend.id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
      {/* <button onClick={e => handleEdit(e)}>Edit</button>
      {props.friend.name}
      <button onClick={e => props.handleDelete(e, props.friend.id)}>
        delete
      </button> */}
    </div>
  );
};

export default Friend;
