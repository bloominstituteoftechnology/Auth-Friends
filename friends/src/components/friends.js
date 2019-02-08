import React from 'react';
import Friend from './friend';

//passed as props: friends={this.props.friends}

const Friends = props => {
    console.log("props in Friends", props)
    return(
        <div>
            
                {props.friends.map(f => {
                    return(
                    <ul 
                        className="friendCard"
                        key={f.id}>
                        <Friend
                            id={f.id} 
                            name={f.name}
                            age={f.age}
                            email={f.email}
                            />
                            <img src="https://img.icons8.com/wired/20/000000/pencil.png" />
                            <img src="https://img.icons8.com/wired/20/000000/full-trash.png" />
                    </ul>
                    )
                })}
        </div>
    )
}

export default Friends;