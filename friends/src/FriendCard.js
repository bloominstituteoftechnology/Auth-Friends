import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleted, updated } from './actions'

const FriendCard = (props) => {
    // console.log("FriendCard props", props);
    let values = { name: props.name, age: props.age, email: props.email }
    return (
        <div className="card-container row">
            {props.friends.map((e, i) => {
                // console.log("e", e)
                return (<Card className="friend-card col-4" key={i}>
                    <CardBody>
                        <CardTitle>{e.name}</CardTitle>
                        <CardText>{e.age} Years</CardText>
                        <CardText>{e.email}</CardText>
                        <Link to="/" className="btn btn-success" onClick={() => props.updated(values, e.id)}>UPDATE!</Link>
                        <Button className="btn-danger" onClick={() => props.deleted(e.id)}>DELETE</Button>
                    </CardBody>
                </Card>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log("STATE", state)
    setTimeout(() => {
        return
    }, 2000)
    return {
        friends: state.friendsReducer.friends,
        name: state.form.friend.values.name,
        age: state.form.friend.values.age,
        email: state.form.friend.values.email
    }
}

export default connect(mapStateToProps, { deleted, updated })(FriendCard);