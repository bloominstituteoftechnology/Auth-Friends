import React from 'react'; 
import {Input, Row, Button} from 'react-materialize'; 

const FriendsForm = (props) => {
    return (
        <div className = "friendsForm">
            <h3> Add New Contact </h3>
                <Row className  = 'form'>
                    <Input  s = {4} onChange = {props.change} type = "text" name = "name" placeholder = "Name" />
                    <Input  s = {2} onChange = {props.change} type = "text" name = "age" placeholder = "Age"/>
                    <Input s = {4} onChange = {props.change} type = "text" name = "email" placeholder = "Email" />
                    <Button onClick = {props.submit}> Add Contact </Button>
                </Row>
           
        </div>
    )
}

export default FriendsForm; 