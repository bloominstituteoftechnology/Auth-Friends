import React from 'react'
import {Card, CardHeader, CardTitle, CardText} from 'reactstrap'
const FriendCard = props => {

    return(
            <div>
                <Card key={props.id}>
                    <CardHeader>
                        {props.name}
                    </CardHeader>

                </Card>
            </div>

    );
};
export default FriendCard;