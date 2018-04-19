import React from 'react';
import { connect } from 'react-redux';
import { updateFriend } from '../Actions/Index.js';

class UpdateFriends extends React.Component {
    state = {
        Fields: {
            name: '',
            age: '',
            email: '',
            edit: true,
        },
        id: 0,
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        const fields = this.state.Fields;
        fields[name] = value;
       this.setState({ Fields: fields });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateFriend(this.state.id, this.state.Fields);
        this.setState({
            Fields: {
                name: '',
                age: '',
                email: '',
                
            }
        });
        this.props.update()
    }
    
    componentDidMount() {
        const { friend } = this.props;
        const field = this.state.Fields;
        field.name = friend.name;
        field.age = friend.age;
        field.email = friend.email;
        this.setState({
            Fields: field,
            id: friend.id,
        });
    }

    render() {
        // console.log(this.state)
        return (
            <div className="Container">
               <form onSubmit={this.handleSubmit}>
                   <fieldset>
                       <legend>Edit Friend </legend>
                        <input onChange={this.handleInputChange} value={this.state.Fields.name} type="text"   name="name" placeholder="Enter Name" />
                        <input onChange={this.handleInputChange} value={this.state.Fields.age} type="number" name="age" placeholder="Enter Age" />
                        <input onChange={this.handleInputChange} value={this.state.Fields.email} type="email"  name="email" placeholder="Enter Email" />
                        <button>Update Friend</button> 
                   </fieldset>            
               </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { updateFriend })(UpdateFriends);