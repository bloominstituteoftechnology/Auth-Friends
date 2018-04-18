import React from 'react';

export default (props) => {
    return (
        <div>
            <form onSubmit={props.createFriend} >
                <input
                    className="input"
                    onChange={props.handleInputChange}
                    placeholder="Friend's Name"
                    value={props.friendName}
                    name="friendName"
                />
                <input
                    className="input"
                    onChange={props.handleInputChange}
                    placeholder="Friend's Age"
                    value={props.friendAge}
                    name="friendAge"
                />
                <input
                    className="input"
                    onChange={props.handleInputChange}
                    placeholder="Friend's Email"
                    value={props.friendEmail}
                    name="friendEmail"
                />
                <button className="button button-add" type="submit">Add To List</button>
            </form>
        </div>
    );
}