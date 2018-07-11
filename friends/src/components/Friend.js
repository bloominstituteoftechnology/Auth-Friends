import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleEdit: false
        }
    }

    render() {
        return (
            <div className='friend-container'>
                <button onClick={() => this.setState({ toggleEdit: !this.state.toggleEdit })} >Edit</button>
                <p>{this.props.friend.name}</p>
                <p>{this.props.friend.email}</p>
                <p>{this.props.friend.age}</p>
            </div>
        );
    }
}

export default Friend;