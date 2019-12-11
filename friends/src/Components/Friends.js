import React from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';

import {Card, Button, CardHeader } from 'semantic-ui-react';


const Friends = ({ friend }) => {

    const handleDelete = e => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/api/friends/${friend.id}`)
        .then(res => {
            window.location.reload(false);
            console.log('res', res);
        })
        .catch(err => console.log('err', err));
    }

    return (
        <>
        <Card>
            <Card.Content>
                <Card.Header>{friend.id}</Card.Header>
                <Card.Meta>{friend.age} years old</Card.Meta>
                <Card.Description>{friend.email}</Card.Description>
                <Button.Group>
                    <Button positive>Edit</Button>
                    <Button.Or />
                    <Button negative onClick={handleDelete}>Delete</Button>
                </Button.Group>
            </Card.Content>
        </Card>
        </>
    )
}

export default Friends;