import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

const FriendCard = (props) => {
    return (
        <div className="card-container row">
            {props.friends.map((e, i) => {
                // console.log(e)
                return (<Card className="friend-card col-4" key={i}>
                    <CardBody>
                        <CardTitle>{e.name}</CardTitle>
                        <CardText>{e.age} Years</CardText>
                        <CardText>{e.email}</CardText>
                        <Link to="/" className="btn btn-success" onClick={() => props.update(e.id)}>UPDATE!</Link>
                        <Button className="btn-danger" onClick={() => props.delete(e.id)}>DELETE</Button>
                    </CardBody>
                </Card>
                );
            })}
        </div>
    );
};

export default FriendCard;