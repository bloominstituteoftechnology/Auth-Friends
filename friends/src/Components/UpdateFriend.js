import React from 'react';
import { connect } from 'react-redux';
import { updateFriend } from '../Actions/Index.js';
import { SIGINT } from 'constants';

class ChangeFriend extends React.Component {
    state ={
        Inputs: {
            name: '',
            age: '',
            email: '',
            edit: true,
        },
        id: 0,
    }
    handelInputChange = (event) => {
        const { name, value } = event.target;
        const inputs = this.state.Inputs;
        input[name] = value;
        this.setState({ Inputs: inputs });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateFriend(this.state.id, this.state.Inputs);
        this.setState({
            Inputs: {
                name: '',
                age: '',
                email: '',
            }
        });
        this.props.update()
    }
    componentDidMount() {
        const { friend } = this.props;
        const input = this.state.Inputs;
        input.name = friend.name;
        input.age = friend.age;
        input.email = friend.email;
            this.setState({
                Inputs: input,
                id: friend.id,
            });
        }
        render() {
            return (
                <div className="Friends">
                    <form onSubmit={this.handleSubmit}>
                    <p>
                    <p> Edit Friend </p>
                    <input onChange={this.handelInputChange} value={this.state.Inputs.name} type="text" name="name" placeholder="Enter Name"/>
                    <input onChange={this.handelInputChange} value={this.state.Inputs.age} type="text" age="age" placeholder="Enter Age"/>
                    <input onChange={this.handelInputChange} value={this.state.Inputs.email} type="text" email="email" placeholder="Enter Email"/>
                    <button> Update Friends </button>
                    </p>
                    </form>
                    </div>
            )
        }
}
const mapStateToProps = state => {
    return state;
}
export default connect(mapStateToProps, {updateFriend })(ChangeFriend);