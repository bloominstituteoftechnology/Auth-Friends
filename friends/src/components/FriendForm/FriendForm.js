import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

function FriendForm(props) {
    function handleSubmit(event) {
        event.preventDefault();

        if (props.isUpdating) {
            props.handleUpdateFriend(props.friend.id);
        } else {
            props.handleAddNewFriend(event);
        }
    }

    return (
        <Fragment>
            <form>
                <div className="friendInputBoxes">
                    <input
                        type="text"
                        value={props.friend.name}
                        onChange={props.handleChange}
                        placeholder="bffs name..."
                    />
                </div>
                <div className="friendInputBoxes">
                    <input
                        type="text"
                        value={props.friend.nickname}
                        onChange={props.handleChange}
                        placeholder="bffs alias..."
                    />
                </div>
                <div className="friendInputBoxes">
                    <input
                        type="text"
                        value={props.friend.dob}
                        onChange={props.handleChange}
                        placeholder="bffs bDay..."
                    />
                </div>
                <div className="friendInputBoxes">
                    <input
                        type="text"
                        value={props.friend.motto}
                        onChange={props.handleChange}
                        placeholder="bffs quote..."
                    />
                </div>
                <button className="friendsSubmitButton" onClick={handleSubmit}>X Marks the Spot</button>
            </form>
        </Fragment>
    );
}
export default FriendForm;