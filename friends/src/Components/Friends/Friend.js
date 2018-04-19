import React from 'react';
import Update from './Update';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            friendName: '',
            friendAge: '',
            friendEmail: '',
        }
    }

    friendChange = event => {
        event.preventDefault();
        const { friendName, friendAge, friendEmail } = this.state;
        const changes = { id: this.props.id }
        if (friendName.trim() !== "") changes.name = friendName
        if (friendAge.trim() !== "") changes.age = friendAge
        if (friendEmail.trim() !== "") changes.email = friendEmail
        this.props.updateFriend(changes);
        this.setState({ friendName: '', friendAge: '', friendEmail: '', show: false });
    }

    toggleShow = () => {
        let visible = this.state.show;
        this.setState({ show: !visible })
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div key={this.props.id}>
                <h1>{this.props.name}</h1>
                <strong>{this.props.age}</strong>
                <p>{this.props.email}</p>
                {this.state.show ?
                    <Update
                        toggleShow={this.toggleShow}
                        friendChange={this.friendChange}
                        handleInputChange={this.handleInputChange}
                        friendName={this.state.friendName}
                        friendAge={this.state.friendAge}
                        friendEmail={this.state.friendEmail}
                        show={this.state.show}
                    /> :
                    <button onClick={this.toggleShow} className="button button-update" >Update Friend</button>}
                    <button onClick={() => this.props.deleteFriend(this.props.id)} className="button button-delete">Remove Friend</button>
            </div>
        )
    }
}

export default Friend;