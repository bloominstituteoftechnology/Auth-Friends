import React from 'react';

const Friends = props => {
    return (
        <div>
            {props.error !== null ? <h3>{this.props.error}</h3> : null}

                {props.friends.map(friend => (
                    <div key={friend.id}>
                    <ul>
                    {friend.name}
                    </ul>
                    <span>{friend.email}</span>
                    </div>
                ))}

            {props.pending ? <h1>LOADING</h1> : null}


        </div>
    );
}

export default Friends;
