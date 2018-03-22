import React from 'react';
import { connect } from 'react-redux';
 
import { addFriend } from '../actions';

class CreateFriendForm extends React.Component {
    state = {
        Fields: {
            name: '',
            age: '',
            email: '',
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        // console.log(name, value);
        const fields = this.state.Fields;
        fields[name] = value;
        this.setState({Fields: fields});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addFriend(this.state.Fields);
        this.setState({
            Fields: {
                name: '',
                age: '',
                email: '',
            }
        });
    }

    render() {
        // console.log(this.props)
        return (
            <div className="Container">
               <form onSubmit={this.handleSubmit}>
                   <fieldset>
                       <legend> New Friend Info </legend>
                        <input onChange={this.handleInputChange} value={this.state.Fields.name} type="text"   name="name" placeholder="Enter Name" />
                        <input onChange={this.handleInputChange} value={this.state.Fields.age} type="number" name="age" placeholder="Enter Age" />
                        <input onChange={this.handleInputChange} value={this.state.Fields.email} type="email"  name="email" placeholder="Enter Email" />
                        <button>ADD FRIEND</button> 
                   </fieldset>            
               </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { addFriend })(CreateFriendForm);