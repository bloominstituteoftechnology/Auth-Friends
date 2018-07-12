import React from 'react';
import '../App.css';

const SaveFriend = props => {
    return (
        <div className="save-friend">
            <form>
                <input
                    placeholder="Add Friend"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SaveFriend;