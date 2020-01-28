import React from "react";

const Friend = props => {
    return (
        <div>
            <h4>{props.homie.name}</h4>
            <p>{props.homie.age}</p>
            <p>{props.homie.email}</p>
        </div>
    )
}

export default Friend;