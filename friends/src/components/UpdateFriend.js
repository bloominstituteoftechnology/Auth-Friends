import React from 'react';

class UpdateFriends extends React.Component{
    render(){
        return(
            <div>
                <input placeholder='name'
                    name='name'
                    type='text'
                    value={this.props.name}
                    onChange={this.props.handleChange} /><br />
                <input placeholder='age'
                    name='age'
                    type='number'
                    value={this.props.age}
                    onChange={this.props.handleChange} /><br />
                <input placeholder='email'
                    name='email'
                    type='email'
                    value={this.props.email}
                    onChange={this.props.handleChange} /><br />
            </div>
        )
    }
}

export default UpdateFriends;