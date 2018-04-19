import React from 'react';

const Update = props => {
    return (
        <div className={props.show ? "task" : "task unselected"} >
            <form onSubmit={props.friendChange} >
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
                <button className="button button-update" type="submit" > Update Friend </button>
            </form>
        </div>
    )
}

export default Update