
//-- Dependencies --------------------------------
import React from "react";

//-- Friend - Implementation & Export ------------
export default function ({friend}) {
    return (
        <div className="friend">
            <span>Name: {friend.name}</span>
            <span>Age: {friend.age}</span>
            <span>Email: {friend.email}</span>
        </div>
    )
}
