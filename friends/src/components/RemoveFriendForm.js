import React from 'react';
import { withRouter } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";


class RemoveFriend extends React.Component {
    state = {
        currentFriends: [],
        friendName: {
            name: ''
        }
    };

    handleChange = e => {
        this.setState({
            friendName: {
                ...this.state.friendName,
                [e.target.name]: e.target.value
            }
        });
    };

    removeFriend = e => {
        e.preventDefault();

        axiosWithAuth()
            .get("http://localhost:5000/api/login")
            .then((res) => {
                console.log('ab: FriendList.js: getData(): res:', res);
                this.setState({
                    currentFriends: res.data
                })
            })
            .catch((err) => {
                console.error(err.response)
            });
        
        const id = this.state.currentFriends.find((frn) => {
            if (frn.name === this.state.friendName.name) {
                return frn.id
            } else {
                console.log('cannot find friend')
            };
        });



        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends:${id}`)
            .then((res) => {
                console.log('ab: RemoveFriendForm.js: removeFriend(): res:', res);
                this.props.history.push('/friendlist');
            })
            .catch((err) => {
                console.error(err.response)
            })
    };

    pushToComponent = e => {
        e.preventDefault();

        this.props.history.push('/update');
    }



    render() {
        return (
            <div className="form">
                <form onSubmit={this.removeFriend}>
                    <header>
                        <h2> Remove Friend</h2>
                    </header>
                    <label htmlFor="name">
                        Name
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.friendName.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    
                    <button> Remove Friend</button>
                </form>
                <form onSubmit={this.pushToComponent.bind(this)}>
                    <header className="footer-form-question">
                        <h5>Update A Friend ?</h5>
                    </header>
                    <button> Yes</button>
                </form>
            </div>
        );
    }
};

export default withRouter(RemoveFriend);