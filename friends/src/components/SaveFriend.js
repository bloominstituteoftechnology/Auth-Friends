import React from 'react';
import '../App.css';

const SaveFriend = props => {
    return (
        <div className="save-friend">  
            <form onSubmit={props.handleSubmit}>
                <input
                    name='name'
                    placeholder="Name"
                    value={props.name}
                    onChange={props.handleChange}
                />
                <input
                    name='age'
                    placeholder="Age"
                    value={props.age}
                    onChange={props.handleChange}
                />
                <input
                    name='email'
                    placeholder="Email"
                    value={props.email}
                    onChange={props.handleChange}
                />
                <button type="submit">Submit</button>
                {props.name !== '' || props.age !== '' || props.email !== '' ? <button onClick={() => props.handleClear()}>Clear</button> : null}
            </form>
            <p>Use form to add or edit friend</p>
        </div>
    );
};

export default SaveFriend;