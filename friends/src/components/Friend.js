import React from 'react'; 
import {Card} from 'react-materialize'

const Friend = (props) => {
    return (
        <Card className = "teal lighten-2 friend">
            <p><strong> Name:</strong> {props.name}</p>
            <p> <strong>Age: </strong>{props.age}</p>
            <p><strong> Email: </strong>{props.email}</p>
        </Card>
    )
}

export default Friend; 