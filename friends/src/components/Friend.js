import React from 'react'
import {Card, CardHeader, CardText, Row, Col, Button} from 'reactstrap'
import './Friends.css';
const FriendCard = props => {

    return(
            <div>
                <Card key={props.id} className='Friendcard'>
                    <CardHeader>
                        {props.name}
                    </CardHeader>
                    <CardText>
                        <Row>
                            <Col>
                                Email: {props.email}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Age: {props.age}
                            </Col>
                        </Row>
                    </CardText>
                    <Button color='danger'>Remove Me</Button>
                </Card>

            </div>

    );
};
export default FriendCard;