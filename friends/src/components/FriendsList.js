import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = props => {
    return(
        <div>
            <h2> Friends List</h2>
            {props.friends.map(value =>
                <div>
                    Name: {value.name}
                    Age: {value.age}
                    Email: {value.email}
                </div>
            )}
        </div>
    )
}

export default FriendsList;