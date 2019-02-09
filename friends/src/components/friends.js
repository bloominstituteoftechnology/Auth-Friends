import React from 'react';
import { connect } from 'react-redux';
import Friend from './friend';

import { deleteFriend } from '../actions/actions'; 
//passed as props: friends={this.props.friends}

const Friends = props => {
    return(
        <div className="friends">
            
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
                            <img 
                            onClick={ () => {props.updateData(f.id, {
                                id: f.id, 
                                name:f.name,
                                age: f.age,
                                email: f.email}
                            )}}
                            src="https://img.icons8.com/wired/20/000000/pencil.png" />
                            <img 
                            onClick={() => {props.deleteFriend(f.id)} }
                            src="https://img.icons8.com/wired/20/000000/full-trash.png" />
                    </ul>
                    )
                })}
        </div>
    )
}

export default connect(null, { deleteFriend } )(Friends);