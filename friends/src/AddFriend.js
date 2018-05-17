import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { added } from './actions'
import { connect } from 'react-redux';

class AddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    updateDataText = e => {
        console.log("even", e)
        this.setState({ [e.target.name]: e.target.value });
    }

    addFriend = (e) => {
        e.preventDefault();
        let newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        this.props.added(newFriend);
        this.setState({
            name: '',
            age: '',
            email: '',
        });
    }

    render() {

        return (
            <div>
                <form>
                    <div className="form-group">
                        <p>Name</p>
                        <input value={this.state.name} onChange={this.updateDataText} className="form-control" type="text" name='name' />
                    </div>
                    <div className="form-group">
                        <p>Age</p>
                        <input value={this.state.age} onChange={this.updateDataText} className="form-control" type="number" name='age' />
                    </div>
                    <div className="form-group">
                        <p>Email</p>
                        <input value={this.state.email} onChange={this.updateDataText} className="form-control" type="email" name='email' />
                    </div>
                    <Link to="/" onClick={this.addFriend} className="btn btn-primary">Add Friend!</Link>
                </form>
            </div >
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         friends: state.friends,
//         error: state.error
//     }
// }

export default connect(null,
    { added })(AddFriend);