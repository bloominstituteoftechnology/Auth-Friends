import React from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, CardText, CardFooter, CardGroup } from 'mdbreact';

// Displays the Friend data onto the page
const Friend = (props) => {
    return (
        <CardGroup>
            <Card style={{width: '22rem', marginTop: '1rem'}} className="text-center">
            <CardHeader color="special-color-dark">{props.friend.name}</CardHeader>
            <CardBody>
            <CardTitle>Information</CardTitle>
            <CardText>Age: {props.friend.age}</CardText>
                <CardText>Email: {props.friend.email}</CardText>
            {/* <Button color="deep-orange lighten-1" size="sm" onClick={event => {event.preventDefault; props.goToUpdateFriendForm(event, props.friend.id)}}>Edit</Button> */}
            {/* <Button onClick={() => props.handleDelete(props.friend.id)} color="red accent-4" size="sm">Delete</Button> */}
            </CardBody>
            </Card>
        </CardGroup>
    )
};

export default Friend;