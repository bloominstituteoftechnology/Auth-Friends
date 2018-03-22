import React from 'react';
import { connect } from 'react-redux'

import { deleteFriend } from '../actions'

class Friends extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <div className="Friends">
                {this.props.friends.map(friend => 
                    <div key={friend.id} className="Friends__Friend">
                        <span onClick={() => this.props.deleteFriend(friend.id)}> x: </span>
                            {friend.name}
                        <button>EDIT</button>
                    </div> 
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { deleteFriend })(Friends);