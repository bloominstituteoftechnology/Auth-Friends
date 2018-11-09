import React from 'react';

class Friend extends React.Component{

    render(){
        return(
            <div>
                {this.props.name}
                {this.props.age}
                {this.props.email}
            </div>
        )
    }
};

export default Friend;