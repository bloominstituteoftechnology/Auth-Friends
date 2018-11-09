import React from 'react';

import './components.css';

class Friend extends React.Component{

    render(){
        return(
            <div className="friend">
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.email}</p>
            </div>
        )
    }
};

export default Friend;