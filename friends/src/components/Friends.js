import React from "react";


export default class Friends extends React.Component {
    
    
    render(props) {
        return (
            {this.props.friends.map(friend => {
                <div>
                    <h2>{friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            })}
        )
    }
}